import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getJobs(cursor?: string) {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    if (!databaseId) {
      throw new Error("NOTION_DATABASE_ID is not defined");
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
      page_size: 100,
    });

    const jobs = response.results.map((page: any) => {
      const getProperty = (
        property: any,
        type: string,
        defaultValue = "N/A"
      ) => {
        if (!property) return defaultValue;
        switch (type) {
          case "title":
            return property.title?.[0]?.text?.content || defaultValue;
          case "rich_text":
            return property.rich_text?.[0]?.text?.content || defaultValue;
          default:
            return defaultValue;
        }
      };

      const getRichTextContent = (richTextArray: any[]) => {
        return richTextArray
          ?.map((richText: any) => {
            if (richText.type === "text") {
              const { content, link } = richText.text;
              return link ? link.url : content;
            }
            return "";
          })
          .join("");
      };

      return {
        id: page.id,
        role: getProperty(page.properties["Role"], "title"),
        type: getProperty(page.properties["Job Type"], "rich_text"),
        location: getProperty(page.properties["Location"], "rich_text"),
        hybrid: getProperty(page.properties["Hybrid"], "rich_text"),
        jobFunction: getProperty(page.properties["Job Function"], "rich_text"),
        jobDescription: getRichTextContent(page.properties["Job Description"]?.rich_text),
        company: getProperty(page.properties["Project"], "rich_text"),
        logo: getRichTextContent(page.properties["Image"]?.rich_text),
      };
    });

    return {
      jobs,
      hasMore: response.has_more,
      nextCursor: response.next_cursor,
    };
  } catch (error) {
    console.error("Error fetching jobs from Notion:", error);
    throw error;
  }
}