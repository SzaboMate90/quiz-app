const fs = require('fs');
const path = require("path");
const glob = require("glob");

const mainLangFile = "en.json";

if (!fs.existsSync(path.join(__dirname, "./shouldTranslate"))) {
	fs.mkdirSync(path.join(__dirname, "./shouldTranslate"));
}

glob(path.join(__dirname, "./SOURCE/*.json"), (err, files) => {
  fs.readFile(path.join(__dirname, "./SOURCE/" + mainLangFile), "utf8", (err2, engData) => {
		let engJsonObj = JSON.parse(engData);

		files.forEach(file => {
			let fileName = file.substring(file.length - 7);
			
			if (fileName !== mainLangFile) {
				fs.readFile(file, "utf8", (err3, data) => {
					let currJsonObj = JSON.parse(data);
					let shouldTranslateObj = {};
					let engJsonRowIndex = 0;

					for (const key in engJsonObj) {
						if (engJsonObj.hasOwnProperty(key)) {
							const engJsonRowValue = engJsonObj[key];
							if (!currJsonObj[key]) {
								currJsonObj[key] = engJsonRowValue;
								shouldTranslateObj[key] = engJsonRowValue;
							}

							engJsonRowIndex++;
						}
					}

					fs.writeFile(path.join(__dirname, "./shouldTranslate/" + fileName), JSON.stringify(shouldTranslateObj, null, 4), function(){});
					fs.writeFile(path.join(__dirname, "./../translations/" + fileName), JSON.stringify(currJsonObj, null, 4), function(){});
				});
			}
			else {
				let currJsonObj = JSON.parse(engData);
				fs.writeFile(
					path.join(__dirname, "./../translations/" + fileName),
					JSON.stringify(currJsonObj, null, 4),
					function(){}
					);
			}
		});
	});
});

console.log("Language files generated");

export {};