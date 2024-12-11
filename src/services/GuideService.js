import axios from 'axios';

const GUIDE_API_BASE_URL = "http://localhost:8080/Guide";

class GuideService {

    getGuides(){
        return axios.get(GUIDE_API_BASE_URL);
    }

    createGuide(guide){
        return axios.post(GUIDE_API_BASE_URL, guide);
    }

    getGuideById(guideId){
        return axios.get(GUIDE_API_BASE_URL + '/' + guideId);
    }

    updateGuide(guide, guideId){
        return axios.put(GUIDE_API_BASE_URL + '/' + guideId, guide);
    }

    deleteEmployee(guideId){
        return axios.delete(GUIDE_API_BASE_URL + '/' + guideId);
    }
}

export default new GuideService()