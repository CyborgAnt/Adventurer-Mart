using static System.Math;

// Fight with Loup-Garou
// set up HP, weapons, and choices
// need locket AND gun; can survive with gun only

namespace Boss
{
    public class BossEncounter
    {
        public static void chamberBoss()
        {
            // make separate file/class?
            // add that detail to Pamphlet
            Console.Clear();
            WriteLine("You approach the large metal door; upon closer inspection, you see that the door is very thick and made of iron. And it’s a good thing because you hear a bellow from the other side of the door that is not remotely human. Despite that, you decide to open the door.");
            WriteLine("You see a very large room, mostly empty, basically a chamber. Most of the walls are stone. In front of the far wall is a table, possibly an altar, covered by some kind of dark purple cloth, trimmed in silver. On that table are some leather-bound books and a couple of silver candle holders; there are tall, twin lit candles in each holder.");
            WriteLine("You notice chalk or charcoal sketches on the left and right walls, on the inside of the door, and a very large drawing in front of the table. These appear to be some form of Protection glyphs that you may have seen in a pamphlet earlier. \nThey consist of a triangle, small circles drawn around the points of the triangle, and a large circle surrounding the triangle-circle figure. The one on the floor is drawn in black and white chalk, is about 10-12 feet in diameter, and surrounds a monstrosity.");

            WriteLine("Inside the floor glyph, in front of the table, stands a gaunt figure, over 7 feet tall. The tattered remains of pants and shoes cling to the lower body of the figure. The upper body is lean muscle, covered by a sleek, grey coat of fur. The head… it LOOKS vaguely like a wolf, if a slightly feminine face was put on a wolf head and muzzle, and the jaws were about three times too wide and long.");
            // put a ‘pause’ here?

            WriteLine("This is the source of the strange occurrences in this house.");
            WriteLine("This is a Loup-Garou.");
            // more code

        }

        public static void battleNoLocket()
        {
            WriteLine("You realize that you have a weapon – the Gun – but not much protection. Nevertheless, you vow to not let this monstrosity leave this room alive.");
            WriteLine("As the Loup-Garou turns around to face you, you draw the Gun….");

            // setting up variables for the encounter
            int healthLoupGarou = 50; 	// or higher; adjust, if time
            int playerHealth = 25; 	// or higher
            int armorLoupGarou = 16;
            int armorPlayer = 12;
            int armorWithLocket = 18;
            int damage;
            

            // loop for the fight
            // the player and LG ‘roll’ a d20 to hit; if they connect, they do damage
            // the player ‘rolls a d8’ to damage, the LG rolls a d12; critical hits occur at the max value – double damage

            while((healthLoupGarou != 0) || (playerHealth != 0))
            { 
                Console.WriteLine("You take a shot…");
                
                int roll = random.Next(1, 21);
                if(roll >= armorLoupGarou)
                {
                    damage = random.Next(1, 9); 	// 1-8 damage per shot	
                    WriteLine("Hit! You do {0} damage!", damage);
                }
                else
                {
                    WriteLine("Miss!");
                }
                WriteLine("The Loup-Garou attacks…");
                int rollLG = random.Next(1, 21);
                if(roll >= armorPlayer)
                {
                    damage = random.Next(1, 13); 	// 1-12 damage per attack
                    WriteLine("Hit! You do {0} damage!", damage);
                }
                else
                {
                    WriteLine("Miss!");
                }
            }

            if(healthPlayer <= 0)
            playerEnd();
            if(healthLoupGarou <= 0)
            loupGarouEnd();

        }
            public static void battleNoGunOrNeitherItem()
            {
                WriteLine("You realize that you don’t have a weapon to deal with this monster. You also are just wearing ‘normal’ clothes – not much protection. As you realize this, the door into the room closes shut.");
                WriteLine("You are now trapped in the room with the Loup-Garou. The Loup-Garou also realizes this, and starts to advance towards you, mal-intent in its eyes. It suddenly lunges at you, impossibly fast, with claws outstretched, impossibly strong. You feel an impact… and then there’s blackness, as you are literally torn in half.");
            //    System.Windows.Forms.Application.Exit( );
            }
            public static void battleFull ()
            {
                // test the ‘No Locket’ code, adjust for here
            }
            
            public static void playerEnd()
            {
                WriteLine("Your gun shots seem to slow the Loup-Garou… but not enough. You, however, have been slowed a lot by its counterattacks. You’ve lost a lot of blood, via claw and bites. You raise the Gun to take another shot…");
                WriteLine("… and you never get the shot off. The Loup-Garou streaks by you, claws reaching. You body remains upright for a few moments but your head bounces away. The Loup-Garou will feast well on your remains, tonight.");
            }
            public static void loupGarouEnd()
            {
                WriteLine("The Loup-Garou, despite its impressive resilience, speed, and strength, is looking very wounded and very ticked off. It crouches down, snarling and growling, ready to pounce. You take a deep breath to steady yourself, aim the Gun, and fire, as the Loup-Garou leaps…");
                WriteLine("Your shot lands true.");
                WriteLine("The shot hits the Loup-Garou in the upper forehead, knocking it off-course. it lands with a VERY heavy ‘thud’, rolling towards the iron door. The body starts to… change. It shrinks in height, the grey fur starts to recede, the face starts to shrink… what’s left is the body of a woman, at least 6 feet tall, with long red hair. And there is the strangest sight: the woman looks… content?");
                // clear
                WriteLine("You identify the woman as [name], the seemingly-immortal owner of the house. You report back to the group that sent you, bringing the Gun and other items you might have found. The group is pleased with your work.");
            }

    }
}

