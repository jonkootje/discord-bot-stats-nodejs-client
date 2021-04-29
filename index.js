const CanLog = require("./src/CanLog");
const ConnectedServers = require("./src/DataPoints/ConnectedServers");

class BotStats extends CanLog {

	/**
	 * 
	 * @param {Discord.Client} discordClient 
	 */
	constructor(discordClient) {
		super();
		this.client = discordClient;

		this.dataPoints = [
			new ConnectedServers(this.client)
		];

		this.client.on('ready', () => {
			this.fetchAllDataPoints();
		});

		this.log('Initiated BotStats class');
	}

	/**
	 * Logs a message
	 * @param {String} message 
	 */
	log(message) {
		console.log(`[${(new Date())}] ${message}`);
	}

	async fetchAllDataPoints() {

		var results = {};

		for (var x=0; x<this.dataPoints.length; x++) {
			const dataPoint = this.dataPoints[x];
			results[dataPoint.key] = await dataPoint.getData();
		}

		this.log(
			JSON.stringify(
				results
			)
		);

		return results;

	}

}

module.exports = BotStats;