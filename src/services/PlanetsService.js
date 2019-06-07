
class PlanetsService {

    request = async () => {
        const response = await fetch('https://swapi.co/api/planets');
        const json = await response.json();
        let allPlanets = json.results;
        return allPlanets;
    };
    planets=async()=>{
    return   await this.request()
    }
}

export default PlanetsService;