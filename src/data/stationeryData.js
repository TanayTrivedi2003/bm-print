export const letterheads = [
    {
        id: "lh-1",
        handle: "classic-letterhead",
        title: "Classic Letterhead",
        description: "Clean and professional letterhead for corporate use",

        images: [
            {
                id: "img-1",
                src: "/images/letterhead/letterhead.jpg",
                alt: "Classic Letterhead",
            },
        ],

        variants: [
            {
                id: "lh-1-v1",
                title: "100 Sheets",
                price: 20,
                compareAtPrice: 50,
                minQuantity: 100,          // 👈 MOQ
                availableForSale: true,
                quantityAvailable: 999,
                selectedOptions: [
                    { name: "Quantity", value: "100 Sheets" },
                ],
            },
            {
                id: "lh-1-v2",
                title: "250 Sheets",
                price: 800,
                compareAtPrice: 1000,
                minQuantity: 250,          // 👈 MOQ
                availableForSale: true,
                quantityAvailable: 999,
                selectedOptions: [
                    { name: "Quantity", value: "250 Sheets" },
                ],
            },
        ],
    },

    {
        id: "lh-2",
        handle: "premium-letterhead",
        title: "Premium Letterhead",
        description: "High-quality paper with sharp print finish",

        images: [
            {
                id: "img-2",
                src: "/images/letterhead/Bill-Books.webp",
                alt: "Premium Letterhead",
            },
        ],

        variants: [
            {
                id: "lh-2-v1",
                title: "50 Sheets",
                price: 180,
                compareAtPrice: 250,
                minQuantity: 6,          // 👈 MOQ
                availableForSale: true,
                quantityAvailable: 999,
                selectedOptions: [
                    { name: "Quantity", value: "50 Sheets" },
                ],
            },
        ],
    },

    {
        id: "diary-1",
        handle: "for-loop-note-a5-diary",
        title: "For Loop Note – A5 Diary",
        description: "Premium A5 size diary perfect for notes, planning, and daily use",

        images: [
            {
                id: "img-diary-1",
                src: "/images/letterhead/Loop-Note-Diary.webp", // image path apne hisaab se
                alt: "For Loop Note A5 Diary",
            },
        ],

        variants: [
            {
                id: "diary-1-v1",
                title: "A5 Diary",
                price: 400,
                compareAtPrice: 600,
                minQuantity: 50,              // 👈 MOQ
                availableForSale: true,
                quantityAvailable: 999,
                selectedOptions: [
                    { name: "Size", value: "A5" },
                ],
            },
        ],
    },

    {
        id: "desk-calendar-1",
        handle: "desk-calendar",
        title: "Desk Calendar",
        description: "Premium desk calendar perfect for office desks, branding, and corporate gifting",

        images: [
            {
                id: "img-desk-calendar-1",
                src: "/images/letterhead/callendar.jpg", // update image path
                alt: "Desk Calendar",
            },
        ],

        variants: [
            {
                id: "desk-calendar-1-v1",
                title: "Desk Calendar",
                price: 250,               // per unit price
                compareAtPrice: null,     // optional
                minQuantity: 10,          // 👈 MOQ
                availableForSale: true,
                quantityAvailable: 999,
                selectedOptions: [
                    { name: "Type", value: "Desk Calendar" },
                ],
            },
        ],
    },
    {
        id: "id-card-1",
        handle: "id-card-printing",
        title: "ID Card Printing",
        description: "Durable and high-quality ID cards suitable for offices, schools, and events",

        images: [
            {
                id: "img-id-card-1",
                src: "/images/letterhead/ID-cards.webp", // update image path if needed
                alt: "ID Card Printing",
            },
        ],

        variants: [
            {
                id: "id-card-1-v1",
                title: "Standard ID Card",
                price: 120,                // per unit price
                compareAtPrice: 190,
                minQuantity: 10,            // 👈 MOQ
                availableForSale: true,
                quantityAvailable: 999,
                selectedOptions: [
                    { name: "Type", value: "ID Card" },
                ],
            },
        ],
    },
    {
        id: "self-inking-stamp-1",
        handle: "self-inking-stamp",
        title: "Self Inking Stamp",
        description: "Durable self inking stamp ideal for office use, branding, and repetitive stamping",

        images: [
            {
                id: "img-self-inking-stamp-1",
                src: "/images/letterhead/stamp.webp", // update image path if needed
                alt: "Self Inking Stamp",
            },
        ],

        variants: [
            {
                id: "self-inking-stamp-1-v1",
                title: "Standard Self Inking Stamp",
                price: 300,
                compareAtPrice: 350,        // no old price provided
                minQuantity: 1,              // 👈 MOQ
                availableForSale: true,
                quantityAvailable: 999,
                selectedOptions: [
                    { name: "Type", value: "Self Inking Stamp" },
                ],
            },
        ],
    }




];
