const DataPoint = require("./DataPoint");

class ConnectedServers extends DataPoint {

	async getData() {

		if (this.client.shard) {
			this.log('Sharding is not supported at this time');
			return;
		}

		var servers = [];

		this.client.guilds.cache.map((guild) => {
			servers.push({
				"id": guild.id,
				"name": guild.name,
				"memberCount": guild.memberCount
			});
		});

		this.log(this.client.guilds.cache);

		return servers;
	}

}

module.exports = ConnectedServers;