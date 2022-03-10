import { Context } from 'koa';
import Router from 'koa-router';
import PokeAPI from 'src/services/PokeAPI';

const router: Router = new Router({
  prefix: '/pokemon',
});

router.get('/:name', async (ctx: Context) => {
  try {
    const { name } = ctx.params;

    const { data } = await PokeAPI.get(`pokemon/${name}`);

    const body = {
      name: data.name,
      abilities: [],
      avatar: data.sprites.front_default,
    };

    data.abilities.forEach((ability) => {
      body.abilities.push(ability.ability.name);
    });

    body.abilities.sort();

    ctx.body = body;
  } catch (e) {
    ctx.body = {
      error: 'Error getting data',
    };
  }
});

export const PokemonRoutes = router.routes();
