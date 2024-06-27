// Import supabase client
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = 'https://johsonffbpnjjjowpsvo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvaHNvbmZmYnBuampqb3dwc3ZvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTQ3Nzg1MCwiZXhwIjoyMDM1MDUzODUwfQ.KlwJkIMj3GncMll9bRTmDngTn2gXQJRe5-q8_mvBFZE';
const supabase = createClient(supabaseUrl, supabaseKey);

// Handler function
module.exports = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('students')
            .select('*');

        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
