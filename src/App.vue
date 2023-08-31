<script setup>
import {ref} from 'vue';
import NavigationMenu from "@/components/NavigationMenu.vue";
import ItemCard from "@/components/ItemCard.vue";

let optionId = 0;
const navMenuOptions = ref([
  {id: optionId++, text:"Promotions", link:"http://192.168.2.150:5173/"},
  {id: optionId++, text:"New", link:"http://192.168.2.150:5173/"},
  {id: optionId++, text:"Board games", link:"http://192.168.2.150:5173/"},
  {id: optionId++, text:"Accessories", link:"http://192.168.2.150:5173/"}
])

let itemId = 0;
const items = ref([
  {
    id: itemId++,
    price: 146.00,
    rating: 3.5,
    title: "Scythe expeditions",
    description: "\tThe sequel to Scythe sends players on a new adventure into Siberia, where a massive meteorite crashed near the Tunguska River, awakening ancient corruption. An expedition led by Dr. Tarkovsky ventures into the taiga to learn about the meteorite and its impact on the land. Itching for adventure, heroes from the war privately fund their own expeditions to Siberia, hoping to find artifacts, overcome challenges, and ultimately achieve glory.\n\n" +
        "\tExpeditions is a competitive, card-driven, engine-building game of exploration. Play cards to gain power, guile, and unique worker abilities; move your mech to mysterious locations and gain cards found among the tiles; use workers, items, meteorites, and quests to enhance your mech; and use power and guile to vanquish corruption.",
    images: ["/src/assets/scythe-expeditions.webp"],
    categories: []
  },
  {
    id: itemId++,
    price: 75.00,
    rating: 4.5,
    title: "Assassin's Creed: Valhalla Orlog Dice Game",
    description: "\tPureArts and Ubisoft present the officially licensed Orlog Dice Game of Assassin’s Creed Valhalla! Played extensively by the Norsemen and Anglo-Saxons in every city of the video game, Orlog is played by two players who use dice rolls and bonus effects to claim victory over their opponent.\n\n" +
        "\tPlayers roll dice to generate attacks and acquire tokens for God favors - using a combination of both during attacks and for regaining health. Players cast their dice 3 times a round until resolution. Play continues until one player has lost all Health stones.\n\n" +
        "\tWill you earn the favor of the Gods and receive their blessings to win? There’s only one way to find out.",
    images: ["/src/assets/Assassins-Creed-Valhalla-Orlog-Dice-Game-Set.webp","src/assets/assassins-creed-valhalla-orlog-dice-game-second-img.webp"],
    categories: []
  },
  {
    id: itemId++,
    price: 135.00,
    rating: 5.0,
    title: "Brass Birmingham",
    description: "\tBrass: Birmingham is an economic strategy game sequel to Martin Wallace' 2007 masterpiece, Brass. Brass: Birmingham tells the story of competing entrepreneurs in Birmingham during the industrial revolution, between the years of 1770-1870.\n\n" +
        "\tAs in its predecessor, you must develop, build, and establish your industries and network, in an effort to exploit low or high market demands.\n\n" +
        "\tEach round, players take turns according to the turn order track, receiving two actions to perform any of the following actions (found in the original game):\n\n" +
        "\t1) Build - Pay required resources and place an industry tile.\n" +
        "\t2) Network - Add a rail / canal link, expanding your network.\n" +
        "\t3) Develop - Increase the VP value of an industry.\n" +
        "\t4) Sell - Sell your cotton, manufactured goods and pottery.\n" +
        "\t5) Loan - Take a £30 loan and reduce your income.\n\n" +
        "\tBrass: Birmingham also features a new sixth action:\n\n" +
        "\t6) Scout - Discard three cards and take a wild location and wild industry card. (This action replaces Double Action Build in original Brass.)\n\n" +
        "\tThe game is played over two halves: the canal era (years 1770-1830) and the rail era (years 1830-1870). To win the game, score the most VPs. VPs are counted at the end of each half for the canals, rails and established (flipped) industry tiles.\n\n" +
        "\tBirmingham features dynamic scoring canals/rails. Instead of each flipped industry tile giving a static 1 VP to all connected canals and rails, many industries give 0 or even 2 VPs. This provides players with the opportunity to score much higher value canals in the first era, and creates interesting strategy with industry placement.\n\n" +
        "\tIron, coal, and cotton are three industries which appear in both the original Brass as well as in Brass: Birmingham.\n" +
        "\tNew \"Sell\" system\n\n" +
        "\tBrewing has become a fundamental part of the culture in Birmingham. You must now sell your product through traders located around the edges of the board. Each of these traders is looking for a specific type of good each game. To sell cotton, pottery, or manufactured goods to these traders, you must also \"grease the wheels of industry\" by consuming beer. For example, a level 1 cotton mill requires one beer to flip. As an incentive to sell early, the first player to sell to a trader receives free beer.\n\n" +
        "\tBirmingham features three all-new industry types:\n\n" +
        "\tBrewery - Produces precious beer barrels required to sell goods.\n\n" +
        "\tManufactured goods - Function like cotton, but features eight levels. Each level of manufactured goods provides unique rewards, rather than just escalating in VPs, making it a more versatile (yet potentially more difficult) path vs cotton.\n\n" +
        "\tPottery - These behemoths of Birmingham offer huge VPs, but at a huge cost and need to plan.\n\n" +
        "\tIncreased Coal and Iron Market size - The price of coal and iron can now go up to £8 per cube, and it's not uncommon.\n\n" +
        "\tBrass: Birmingham is a sequel to Brass. It offers a very different story arc and experience from its predecessor.",
    images: ["src/assets/brass-birmingham-first.webp", "src/assets/brass-birmingham-second.webp", "src/assets/brass-birmingham-third.webp"],
    categories: []
  },
])

</script>

<template>
  <NavigationMenu :options="navMenuOptions"></NavigationMenu>
  <div id="grid-container">
    <div
        v-for="item in items"
        :key="item.id"
    >
      <ItemCard :item=item></ItemCard>
    </div>
  </div>
  <!--TODO: Make the items align one below the other on smaller devices-->
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Belanosima&display=swap');

#grid-container{
  display: grid;
  gap: 25px;
  grid-auto-flow: column;
  grid-auto-columns: 275px;
}

@media screen and (max-width: 400px) {
  #grid-container {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    justify-items: center;
  }
}

</style>
