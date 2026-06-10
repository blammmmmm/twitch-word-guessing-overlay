import { useEffect, useState } from "react";

const defaultWords = [
  "brad", "drew", "bike", "biking", "rider", "miles", "hero", "heroes", "veteran", "veterans",
  "charity", "donate", "donation", "stream", "twitch", "chat", "viewer", "boston", "newyork", "dc",
  "road", "route", "trail", "bridge", "tunnel", "street", "highway", "helmet", "pedal", "chain",
  "wheel", "tire", "brake", "gear", "seat", "handle", "frame", "hill", "climb", "sprint",
  "coast", "push", "pull", "ride", "finish", "start", "checkpoint", "morning", "night", "sunrise",
  "sunset", "weather", "rain", "wind", "heat", "cold", "clouds", "energy", "power", "battery",
  "hydration", "water", "snack", "protein", "coffee", "banana", "sandwich", "pizza", "burger", "fries",
  "sweat", "pain", "legs", "knees", "ankle", "muscle", "calves", "quad", "hamstring", "shoulder",
  "crew", "driver", "support", "donor", "sponsor", "team", "legend", "beast", "grind", "focus",
  "locked", "mental", "strong", "brave", "heart", "mission", "mileone", "hundred", "twohundred", "threehundred",
  "fourhundred", "fivehundred", "sixhundred", "america", "journey", "adventure", "challenge", "moment", "victory", "winner",

  "apple", "banana", "cherry", "grapes", "orange", "peanut", "tomato", "cheese", "potato", "carrot",
  "pepper", "muffin", "cookie", "donut", "bottle", "pencil", "marker", "window", "mirror", "guitar",
  "violin", "drums", "pillow", "cushion", "tissue", "basket", "hanger", "jacket", "sweater", "button",
  "breeze", "forest", "garden", "rocket", "planet", "cosmos", "galaxy", "shadow", "castle", "island",
  "frozen", "desert", "turkey", "cloudy", "friend", "school", "pocket", "singer", "artist", "dancer",
  "writer", "reader", "farmer", "hunter", "doctor", "lawyer", "baker", "sailor", "hammer", "socket",
  "branch", "silver", "gadget", "sponge", "anchor", "ladder", "ribbon", "flames", "danger", "wallet",
  "pebble", "marble", "candle", "jungle", "winter", "summer", "spring", "autumn", "melody", "church",
  "theory", "saddle", "thunder", "lightning", "ocean", "river", "mountain", "valley", "canyon", "meadow",
  "flower", "dragon", "pirate", "wizard", "kingdom", "treasure", "diamond", "golden", "bronze", "meteor",
  "saturn", "jupiter", "nebula", "comet", "orbit", "soccer", "football", "basketball", "baseball", "tennis",
  "hockey", "boxing", "running", "marathon", "treadmill", "stadium", "jersey", "cleats", "gloves", "coach",
  "player", "referee", "score", "goal", "assist", "movie", "cinema", "ticket", "popcorn", "trailer",
  "director", "actor", "script", "studio", "music", "album", "single", "rapper", "piano", "vocal",
  "track", "mixing", "master", "chorus", "verse", "rhythm", "office", "email", "meeting", "calendar",
  "invoice", "contract", "budget", "project", "client", "deadline", "travel", "airport", "hotel", "passport",
  "luggage", "subway", "station", "vehicle", "engine", "kitchen", "fridge", "stove", "plate", "spoon",
  "fork", "knife", "napkin", "glass", "table", "bedroom", "blanket", "closet", "drawer", "lamp",
  "poster", "shower", "towel", "soap", "animal", "tiger", "lion", "zebra", "monkey", "eagle",
  "shark", "whale", "dolphin", "rabbit", "turtle", "lizard", "parrot", "falcon", "horse", "donkey",
  "goose", "penguin", "otter", "beaver", "secret", "hidden", "puzzle", "answer", "question", "battle",
  "arena", "speed", "boost", "level", "bonus", "round", "timer", "score", "streak", "combo",
  "giant", "tiny", "silent", "loud", "bright", "dark", "smooth", "rough", "heavy", "light",
  "crazy", "funny", "serious", "lucky", "simple", "purple", "yellow", "green", "orange", "broken",
  "fresh", "clean", "dirty", "empty", "full", "early", "later", "north", "south", "east",
  "west", "center", "corner", "middle", "inside", "outside", "behind", "above", "below", "across",
  "around", "between", "through", "forward", "backward", "circle", "square", "triangle", "number", "letter",
  "phrase", "sentence", "message", "comment", "reply", "follow", "subscribe", "donated", "cheered", "shared",
  "posted", "watched", "guessed", "revealed", "reset", "limitless", "foundation", "inspire", "courage", "respect",
  "honor", "effort", "endurance", "recovery", "freedom", "hope", "dream", "belief", "family", "brother",
  "sister", "father", "mother", "uncle", "cousin", "neighbor", "stranger", "smile", "laugh", "tears",
  "pride", "memory", "story", "voice", "choice", "chance", "reason", "purpose", "promise", "future",
  "rescue", "service", "country", "flag", "salute", "supporter", "crowd", "finishline", "distance", "milestone",
  "progress", "update", "record", "pace", "rest", "break", "nap", "sleep", "wake", "breakfast",
  "lunch", "dinner", "oats", "rice", "chicken", "steak", "salmon", "eggs", "toast", "bagel",
  "pasta", "noodle", "soup", "salad", "taco", "burrito", "salsa", "avocado", "lemon", "lime",
  "honey", "cereal", "waffle", "pancake", "syrup", "candy", "chocolate", "vanilla", "strawberry", "blueberry",
  "mango", "pineapple", "watermelon", "peach", "plum", "grapefruit", "coconut", "almond", "cashew", "walnut",
  "pickle", "onion", "garlic", "lettuce", "spinach", "broccoli", "cucumber", "pumpkin", "squash", "zucchini",
  "bean", "lentil", "yogurt", "oatmeal", "granola", "backpack", "duffel", "cooler", "bicycle", "scooter",
  "motor", "bus", "train", "boat", "plane", "cloud", "storm", "drizzle", "misty", "humid",
  "sunny", "foggy", "snowy", "breezy", "freezing", "burning", "blister", "stretch", "massage", "tape",
  "bandage", "icepack", "balance", "stride", "breath", "pulse", "stamina", "strength", "fitness", "training",
  "warmup", "cooldown", "practice", "discipline", "grit", "hustle", "patience", "trust", "loyal", "humble",
  "fearless", "kindness", "cheer", "clap", "chant", "noise", "silence", "whisper", "shout", "dance",
  "jump", "crawl", "stand", "carry", "lift", "drop", "hold", "shake", "wave", "point",
  "look", "watch", "listen", "speak", "think", "learn", "teach", "build", "create", "repair",
  "paint", "draw", "write", "read", "count", "solve", "search", "find", "lose", "win",
  "try", "again", "never", "always", "today", "tomorrow", "yesterday", "weekly", "hourly", "minute",
  "second", "northbound", "southbound", "coastline", "downtown", "uptown", "sidewalk", "crosswalk", "stoplight", "sign",
  "map", "riverbank", "harbor", "parkway", "campus", "market", "bakery", "diner", "store", "garage",
  "field", "court", "track", "gym", "pool", "beach", "lake", "trailhead", "summit", "valiant",
  "noble", "honest", "loyalty", "wisdom", "patriot", "medal", "badge", "uniform", "boots", "armor",
  "shield", "torch", "banner", "legacy", "tribute", "grateful", "sacrifice", "captain", "warrior", "guardian",
  "helper", "fighter", "survivor", "champion", "leader", "teammate", "partner", "buddy", "pal", "homie",
  "together", "forever", "impact", "change", "giving", "blessing", "human", "spirit", "soul", "mindset",
  "dreamer", "believer", "achieve"
];

const cleanWords = (words: string[]) => {
  return Array.from(
    new Set(
      words
        .map((word) => word.trim().toLowerCase())
        .filter((word) => word.length > 0)
    )
  );
};

export const useGetWordList = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const WORD_LIST = urlParams.get("wordlist") ? decodeURIComponent(urlParams.get("wordlist")!) : null;
  const WORD_LIST_URL = urlParams.get("wordlisturl") ? decodeURIComponent(urlParams.get("wordlisturl")!) : null;

  const [wordList, setWordList] = useState<string[]>();
  const [initialized, setInitialized] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<number>(0);

  useEffect(() => {
    (async () => {
      if (initialized) return;

      if (WORD_LIST) {
        setInitialized(true);
        return setWordList(cleanWords(WORD_LIST.split(",")));
      }

      if (!WORD_LIST_URL) {
        setInitialized(true);
        return setWordList(cleanWords(defaultWords));
      }

      const REQUEST = await fetch("https://jere.io/proxy/api/fetch?url=" + WORD_LIST_URL);
      const wordListText = await REQUEST.text();

      if (wordListText === "{}") {
        setTimeout(() => {
          console.log("Refetching word guesser list...");
          setRefetch((old) => old + 1);
        }, 3000);

        return;
      }

      setInitialized(true);
      setWordList(cleanWords(wordListText.split(",")));
    })();
  }, [refetch]);

  return wordList;
};
