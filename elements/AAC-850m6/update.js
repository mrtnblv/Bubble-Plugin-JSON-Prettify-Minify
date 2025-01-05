function(instance, properties, context) {

	try {
        const jsonObject = JSON.parse(properties.jsonstring);
        const prettyJsonString = JSON.stringify(jsonObject, null, 2);
        instance.publishState('prettyjson',prettyJsonString);
    } catch (e) {
        throw new Error("Invalid JSON input");
    }

}