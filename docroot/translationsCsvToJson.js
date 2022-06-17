const csv = require('csvtojson');
const filePath = './translations.csv';
const fs = require('fs');
csv({
    noheader: false,
    trim: true,
    delimiter: ','
})
    .fromFile(filePath)
    .then((jsonArr) => {
        let formattedObj = {};
        // first create all the available languages placeholders by reading the first item
        Object.keys(jsonArr[0]).map((i) => {
            formattedObj[i] = {};
            return i;
        });
        console.log(formattedObj);
        jsonArr.map((i) => {
            for (const [key, value] of Object.entries(i)) {
                const categoryList = i.key.split('.');
                if (categoryList.length > 1) {
                    const category = categoryList[0];
                    const actualKey = categoryList[1];
                    // if there are no values always use as the default value the one in en_UK
                    formattedObj[key][category] = {
                        ...formattedObj[key][category],
                        [actualKey]: isInvalidValue(value) ? i['en'] : value
                    };
                } else {
                    const category = 'common';
                    formattedObj[key][category][i.key] = {
                        ...formattedObj[key][category],
                        [i.key]: isInvalidValue(value) ? i['en'] : value
                    };
                }
            }
            return { ...i };
        });
        console.log('delete unnecessary Key attribute');
        delete formattedObj.key;
        console.log('final obj', formattedObj);
        for (let localeKey in formattedObj) {
            for (let category in formattedObj[localeKey]) {
                console.log('localeKey>>', localeKey);
                fs.writeFile(
                    `./locales/${localeKey}/${category}.json`,
                    JSON.stringify(formattedObj[localeKey][category]),
                    function (err) {
                        if (err) throw err;
                        console.log('Saved!');
                    }
                );
            }
        }
    });
function isInvalidValue(value) {
    return !value || value === '';
}
