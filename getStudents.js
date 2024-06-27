// Import supabase client
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = 'https://johsonffbpnjjjowpsvo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvaHNvbmZmYnBuampqb3dwc3ZvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTQ3Nzg1MCwiZXhwIjoyMDM1MDUzODUwfQ.KlwJkIMj3GncMll9bRTmDngTn2gXQJRe5-q8_mvBFZE';
const supabase = createClient(supabaseUrl, supabaseKey);

// Handler function
exports.handler = async (event, context) => {
    try {
        // Fetch data from Supabase
        const { data, error } = await supabase
            .from('students')
            .select('*');

        // Return response
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
