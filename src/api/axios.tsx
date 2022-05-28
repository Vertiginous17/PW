import axios from 'axios';

export default axios.create({
    // Should be Fast API URL
    baseURL: 'http://localhost:8000/'
});
