const CanLog = require("../CanLog");

class DataPoint extends CanLog {

	constructor(client) {
		super();
		this.client = client;
	}

	/**
	 * Returns the key of the data point
	 * @return {String?}
	 */
	get key() {
		this.log(
			this.__proto__.constructor.name
		)
		return this.__proto__.constructor.name;
	}

	/**
	 * 
	 * @returns {Object}
	 */
	async getData() {
		return [];
	}
	
}

module.exports = DataPoint;