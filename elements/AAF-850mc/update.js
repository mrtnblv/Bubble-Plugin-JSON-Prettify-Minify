function(instance, properties, context) {

	try {
        const jsonObject = JSON.parse(properties.jsonstring);
        const minifiedJsonString = JSON.stringify(jsonObject);
        instance.publishState('minifiedjson',minifiedJsonString);
    } catch (e) {
        throw new Error("Invalid JSON input");
    }

}