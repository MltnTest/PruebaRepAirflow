// Read more in the JS API documentation here: https://docs.dataform.co/guides/javascript/js-api

// publish("new_table")
//   .type("table")
//   .query(ctx => `select * from ${ctx.ref("source_table")}`);

function selectCode() {

    return `SELECT id, CONCAT('Rank: ', CAST(id AS STRING))`;
}

module.exports = { selectCode };