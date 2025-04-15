exports.handler = async (event) => {
    console.log("Hello, World!");
    console.log("Event: ", JSON.stringify(event, null, 2));
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello, World!',
        }),
    };
};


