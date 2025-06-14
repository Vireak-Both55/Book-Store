import { Categories } from "./Category";

export const BookProduct = [
    // Programming
    {
        id: 1,
        bookName: "Java Fundamentals",
        authorName: "James Gosling",
        made: "2015",
        category: "Programming",
        price: "29.99",
        description : "Java Fundamentals – A comprehensive guide to Java's core concepts and object-oriented programming, perfect for beginners and experienced developers alike.",
        image: "https://www.oreilly.com/api/v2/epubs/9780134177335/files/graphics/9780134177359.jpg",
        rate: "4.5"
    },
    {
        id: 2,
        bookName: "Python Crash Course",
        authorName: "Eric Matthes",
        made: "2019",
        category: "Programming",
        price: "31.99",
        description : "Python Crash Course – A fast-paced, hands-on introduction to programming with Python. Great for anyone looking to dive into coding.",
        image: "https://th.bing.com/th/id/OIP.AJDjROhYSz126WL_Tnw-AwHaJy?rs=1&pid=ImgDetMain",
        rate: "4.7"
    },
    {
        id: 3,
        bookName: "Eloquent JavaScript",
        authorName: "Marijn Haverbeke",
        made: "2018",
        category: "Programming",
        price: "25.00",
        description : "Eloquent JavaScript – An insightful and elegant introduction to JavaScript programming, focusing on both concepts and practice.",
        image: "https://th.bing.com/th/id/R.93151d97da033f67d6a4c97557a9f952?rik=qpef8D2EATnJag&pid=ImgRaw&r=0",
        rate: "4.6"
    },
    {
        id: 4,
        bookName: "C# in Depth",
        authorName: "Jon Skeet",
        made: "2019",
        category: "Programming",
        price: "38.50",
        description : "C# in Depth – A deep dive into C# features, patterns, and best practices, authored by one of the most respected voices in the .NET community.",
        image: "https://m.media-amazon.com/images/I/61SDWZzTm+L._SL1400_.jpg",
        rate: "4.8"
    },
    {
        id: 5,
        bookName: "You Don't Know JS",
        authorName: "Kyle Simpson",
        made: "2020",
        category: "Programming",
        price: "26.40",
        description :"You Don't Know JS – A series that explores the intricacies of JavaScript, debunking myths and clarifying hidden mechanics for serious learners.",
        image: "https://th.bing.com/th/id/OIP.ROcuzvME7_Oi5GjhExzPcQHaLD?rs=1&pid=ImgDetMain",
        rate: "4.6"
    },

    // Novel
    {
        id: 6,
        bookName: "To Kill a Mockingbird",
        authorName: "Harper Lee",
        made: "1960",
        category: "Novel",
        price: "10.99",
        description : "A timeless classic exploring justice and morality through the eyes of a young girl in the racially charged American South.",
        image: "https://th.bing.com/th/id/OIP.W1ngiF2AkQaO78CY9yC1HQHaLd?rs=1&pid=ImgDetMain",
        rate: "4.9"
    },
    {
        id: 7,
        bookName: "1984",
        authorName: "George Orwell",
        made: "1949",
        category: "Novel",
        price: "9.49",
        description : "A chilling dystopian novel depicting a totalitarian regime and the haunting consequences of surveillance and censorship.",
        image: "https://th.bing.com/th/id/OIP.Z5KLQbybGAxlM5JdjOWeWwHaKe?rs=1&pid=ImgDetMain",
        rate: "4.8"
    },
    {
        id: 8,
        bookName: "Pride and Prejudice",
        authorName: "Jane Austen",
        made: "1813",
        category: "Novel",
        price: "12.75",
        image: "https://th.bing.com/th/id/OIP.g7a3ggdb6yPVZ0iLmYQi-gHaK_?rs=1&pid=ImgDetMain",
        rate: "4.7",
        description : "A beloved romantic novel that critiques social class and relationships with wit, charm, and enduring insight.",
    },
    {
        id: 9,
        bookName: "The Alchemist",
        authorName: "Paulo Coelho",
        made: "1988",
        category: "Novel",
        price: "11.90",
        description : "An inspiring fable about following your dreams, discovering your purpose, and listening to your heart.",
        image: "https://th.bing.com/th/id/R.e49e4d33dd7f6c8a818a3f826f121537?rik=ZPBPzVndLsIb3A&pid=ImgRaw&r=0",
        rate: "4.5"
    },
    {
        id: 10,
        bookName: "The Great Gatsby",
        authorName: "F. Scott Fitzgerald",
        made: "1925",
        category: "Novel",
        price: "10.50",
        description : "A tragic tale of love, wealth, and illusion set during the roaring 1920s in America.",
        image: "https://th.bing.com/th/id/R.7c5697ee72aae7fe607f69d223740452?rik=LPrBnBgCEjY%2bbA&pid=ImgRaw&r=0",
        rate: "4.4"
    },

    // Comedy
    {
        id: 11,
        bookName: "Bossypants",
        authorName: "Tina Fey",
        made: "2011",
        category: "Comedy",
        price: "14.00",
        description : "A hilarious and honest memoir from Tina Fey, chronicling her journey from awkward youth to comedy icon.",
        image: "https://th.bing.com/th/id/R.94ba8c0eade87d3d7d18f46f8792cd4d?rik=xjo%2fGZiId3OJuA&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f9780316056878_p0_v1_s1200x630.jpg&ehk=1CjgTo%2bPrgp96S6T325TSHJyPqBI0TnpndiigmD8zVA%3d&risl=&pid=ImgRaw&r=0",
        rate: "4.3"
    },
    {
        id: 12,
        bookName: "Me Talk Pretty One Day",
        authorName: "David Sedaris",
        made: "2000",
        category: "Comedy",
        price: "13.99",
        description : "A collection of witty, satirical essays filled with sharp observations and laugh-out-loud moments.",
        image: "https://www.hachettebookgroup.com/wp-content/uploads/2018/02/9780316776967.jpg",
        rate: "4.4"
    },
    {
        id: 13,
        bookName: "Is Everyone Hanging Out Without Me?",
        authorName: "Mindy Kaling",
        made: "2011",
        category: "Comedy",
        price: "12.50",
        description : "Mindy Kaling shares personal stories and reflections with her signature humor and unique voice.",
        image: "https://th.bing.com/th/id/R.17feef281236f48696c379111c4ef331?rik=4dNKeeOTTO0Pfw&pid=ImgRaw&r=0",
        rate: "4.2"
    },
    {
        id: 14,
        bookName: "Good Omens",
        authorName: "Terry Pratchett & Neil Gaiman",
        made: "1990",
        category: "Comedy",
        price: "15.60",
        description : "A comedic and apocalyptic tale of angels, demons, and an unconventional end-of-the-world partnership.",
        image: "https://th.bing.com/th/id/OIP.lzPJ2JTJn03LYldUIk2wPwHaLJ?o=7rm=3&rs=1&pid=ImgDetMain",
        rate: "4.7"
    },
    {
        id: 15,
        bookName: "Hitchhiker's Guide to the Galaxy",
        authorName: "Douglas Adams",
        made: "1979",
        category: "Comedy",
        price: "16.80",
        description : "An absurd, interstellar adventure full of quirky humor and philosophical pondering about life, the universe, and everything.",
        image: "https://i.pinimg.com/originals/81/15/57/811557e53733a25bb508da712c5002c1.jpg",
        rate: "4.8"
    },

    // Comic
    {
        id: 16,
        bookName: "Watchmen",
        authorName: "Alan Moore",
        made: "1987",
        category: "Comic",
        price: "19.99",
        description : "A gritty, graphic deconstruction of superheroes and morality, set in an alternate history of the 20th century.",
        image: "https://th.bing.com/th/id/OIP.C4zFBU4DRVkE4Yw2HEKLxgHaLM?o=7rm=3&rs=1&pid=ImgDetMain",
        rate: "4.9"
    },
    {
        id: 17,
        bookName: "Batman: Year One",
        authorName: "Frank Miller",
        made: "1987",
        category: "Comic",
        price: "18.50",
        description : "A compelling origin story that redefines Batman’s early days and his fight against Gotham’s corruption.",
        image: "https://th.bing.com/th/id/OIP.3VDmM366vfMuk_Ox1d0vFgAAAA?o=7rm=3&rs=1&pid=ImgDetMain",
        rate: "4.7"
    },
    {
        id: 18,
        bookName: "Saga: Volume 1",
        authorName: "Brian K. Vaughan",
        made: "2012",
        category: "Comic",
        price: "14.99",
        description : "An epic space opera blending sci-fi, fantasy, and raw human emotion in a vividly illustrated saga.",
        image: "https://th.bing.com/th/id/R.67d90310ef074c5d10aa41680876881d?rik=A5O%2bb%2brPUrKmJA&riu=http%3a%2f%2ftheblackletters.net%2fwp-content%2fuploads%2f2013%2f06%2fbook-saga.jpg&ehk=DMxdfkLna%2fp%2b5N%2fbhpPSOo2zG6nANZYyGL76I%2boSkAw%3d&risl=&pid=ImgRaw&r=0",
        rate: "4.8"
    },
    {
        id: 19,
        bookName: "Spider-Man: Blue",
        authorName: "Jeph Loeb",
        made: "2002",
        category: "Comic",
        price: "17.25",
        description : "A nostalgic yet emotional retelling of Spider-Man’s early love and personal battles, drawn with a tender lens.",
        image: "https://th.bing.com/th/id/R.7463193ba88408b1403cda181b25508e?rik=BiqGtL6eyxBD%2bw&riu=http%3a%2f%2fwww.shelfabuse.com%2fwp-content%2fuploads%2f2013%2f11%2fspider-man_blue.jpg&ehk=E91PiU7FzSMDO45wJYmyntQSZN%2bmwKWXCKGF47gf9%2fA%3d&risl=&pid=ImgRaw&r=0",
        rate: "4.6"
    },
    {
        id: 20,
        bookName: "X-Men: Dark Phoenix",
        authorName: "Chris Claremont",
        made: "1980",
        category: "Comic",
        price: "20.00",
        description : "The dramatic rise and fall of Jean Grey as the Phoenix, a powerful X-Men saga of identity and sacrifice.",
        image: "https://th.bing.com/th/id/OIP.-D_OZEk4rxFnMWYSmiGuqgHaLZ?o=7rm=3&rs=1&pid=ImgDetMain",
        rate: "4.7"
    }
];
