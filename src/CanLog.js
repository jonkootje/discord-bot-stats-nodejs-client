class CanLog {
	
	/**
	 * Logs a message
	 * @param {Any} message 
	 */
	 log(message) {
		console.log(`[${(new Date())}]`, message);
	}

}

module.exports = CanLog;