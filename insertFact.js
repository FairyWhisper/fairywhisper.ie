import { neon } from '@neondatabase/serverless';
import 'dotenv/config';


const sql = neon(process.env.DATABASE_URL);

async function addFact(text) {
  /* -------------------------
   ROSCOMMON FACTS
------------------------- */

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["roscommon", "The geographical centre of Ireland is located on the western shore of Lough Ree in the south of County Roscommon", "Roscommon"]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["roscommon", "The Roscommon sheep fair was once one of the biggest in Europe.", "Roscommon"]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["roscommon", "St. Coman founded the monastery at Roscommon in the 6th century.", "Roscommon"]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["roscommon", "Roscommon People call themselves 'Rossies', Mayo people, however, call them the Sheep Stealers", "Roscommon"]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["roscommon", "Roscommon is home to RathCroghan, the Iron Age royal complex associated with the kings of Connacht.", "Roscommon"]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["roscommon", "Famous Rossies include Chis O'Dowd, and world-class boxing sisters Aoife and Lisa O'Rourke", "Roscommon"]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["roscommon", "Oscar Wilde, playwright, poet and bon-vivant, was born in Dublin, to anglo-Irish parents *but* his Granfather and parents had lived in Castlerea, so he definitely counts as a Rossie.", "Roscommon"]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["roscommon", "Luke 'Ming' Flanagan, Irish politician and former MEP, hails from Roscommon. A left-wing independent politician known for championing the cause of legalised cannabis, he was suprisingly popular among the only community in Ireland to have voted 'no' on marriage equality...", "Roscommon"]
);

/* -------------------------
   DONKEY FACTS
------------------------- */

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["donkey", "A donkey's bray can be heard up to 3 kilometers away.", "Ireland"]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["donkey", "Donkeys aren't actually stubbon, they're careful and perform risk assessment before acting.", "Ireland"]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["donkey", "Donkeys are extremely social and form strong bonds with other donkeys, some pair-bond for life.", "Ireland"]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["donkey", "Inhaling and exhaling while they bray aplifies and elongates the bray of a donkey, allowing it to resonate (... through time and space, directly into your soul, and your nightmares...)", null]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["donkey", "Donkeys have been used as working animals for thousands of years, valued for their strength and endurance, only happening upon their limit by way of USian tourists in Santorini.", null]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["donkey", "Donkey's large nostrils and ears are evolved adaptations that allow for better heat dissipation and enhanced hearing. This must suck for the ~14,000 donkeys living in Ireland.", null]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["donkey", "The word 'burrito' means 'little donkey' in Spanish. *bonus fact* This isn't the best fact to tell people at a Mexican restaurant, and appaently, does not qualify you to change the christmas song, either. Lesson learned.", null]
);

/* -------------------------
   ONLY GRANS FACTS
------------------------- */

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["gran", "Only Grans can make tea strong enough to resurrect the dead.", null]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["gran", "Grans possess the ancient ability to find lost items by simply entering the room. (or praying to Saint Anthony when all else fails)", null]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["gran", "Rifca Stanescu, a Romanian woman of Romani heritage, became a grandmother at just 23 years old after her daughter, Maria, gave birth at the age of 11. Rifca herself had her first child at the age of 12. Her grandson, Ion, was born when Rifca was 23, making her one of the youngest grandmothers ever documented.", null]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["gran", "Marianne Wallenberg holds the record as the oldest first-time grandmother at 95 years and 81 days.", null]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["gran", "Eight of the 10 oldest people ever recorded were grandmothers (one other was a nun).", null]
);

await sql('INSERT INTO facts (type, fact, region) VALUES ($1, $2, $3)', 
  ["gran", "The blue rinse gained popularity in the 1930s after actress Jean Harlow showcased platinum blonde hair in the film 'Hell's Angels'. Its use was further popularized in the 1940s by Queen Elizabeth the Queen Mother, who adopted the style, making it a symbol of elegance and sophistication. Over time, the blue rinse became associated with older women, particularly in the UK, and even inspired the term 'Blue Rinse Brigade' to describe affluent, socially active older women involved in politics and charity work.", null]
);

/* -------------------------
   Myths
------------------------- */

/* -------------------------
   Visitor Attractions
------------------------- */

/* -------------------------
   The Maginot Line
------------------------- */

/* -------------------------
   True Facts I definitely didn't just make up
------------------------- */

}