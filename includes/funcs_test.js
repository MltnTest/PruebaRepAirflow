// Read more in the JS API documentation here: https://docs.dataform.co/guides/javascript/js-api

function fecha_format() {

    return `EXTRACT(date from TIMESTAMP(starttime, 'UTC')) `;
}

function groupby() {

    return `GROUP BY date`;
}

module.exports = { groupby , fecha_format};