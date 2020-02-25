const cheerio = require('cheerio');
const axios = require('axios');

module.exports = {
	index(req, res, next) {
		const url = process.env.FULL_LINK;
		let playerData = [];
		axios
			.get(url)
			.then((response) => {
				getData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});

		function getData(html) {
			const $ = cheerio.load(html);
			$('table.player-table tr.player-row').each((i, elem) => {
				let link = `${process.env.SHORT_LINK}/${$($(elem).find('td')[2]).find('a').attr('href')}`;
				let nameURL = link.split('/').pop().split('.').shift();
				playerData.push({
					name: $(elem).find('td a span.full-name').text(),
					rank: Number($($(elem).find('td')[0]).text()),
					position: $($(elem).find('td')[3]).text(),
					bye: $($(elem).find('td')[4]).text(),
					best: Number($($(elem).find('td')[5]).text()),
					worst: Number($($(elem).find('td')[6]).text()),
					average: Number($($(elem).find('td')[7]).text()),
					link: `${process.env.SHORT_LINK}/nfl/players/${nameURL}.php`,
					nameURL: nameURL
				});
			});
			res.send(playerData);
		}
	}
};
