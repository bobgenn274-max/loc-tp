exports.handler = async function(event, context) {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body);
        
        // This is where you see the data.
        // It will appear in your Netlify site's "Functions" log.
        console.log(`📍 --- LOCATION PING RECEIVED --- 📍
        Latitude:  ${data.lat}
        Longitude: ${data.lon}
        Time:      ${data.time}
        From:      ${data.userAgent}
        ------------------------------------`);

        // Send a happy success message back to the webpage
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data logged successfully' })
        };
    } catch (error) {
        console.error('Error processing request:', error);
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Bad request.' })
        };
    }
};