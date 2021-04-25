/**
 *
 * @param query
 * @returns {Promise<{summary: string, records: *[]}>}
 */
export async function neo_query(query) {
  const neo4j = require("neo4j-driver");

  const driver = neo4j.driver(
    "bolt://localhost:7687",
    neo4j.auth.basic("neo4j", "zxjzxj233")
  );
  const session = driver.session({ defaultAccessMode: neo4j.session.READ });
  let result = {
    records: [],
    summary: "",
  };

  try {
    result = await session.run(query);
  } finally {
    await session.close();
  }

  // on application exit:
  await driver.close();
  return result;
}
