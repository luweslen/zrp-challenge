import axios from 'axios';
import { POKE_API_URL } from 'src/configs/Environment';

const PokeAPI = axios.create({
  baseURL: POKE_API_URL,
});

export default PokeAPI;
