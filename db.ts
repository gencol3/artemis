export const topics = [
    {
        id: '1',
        name: 'Gaming',
    },
    {
        id: '2',
        name: 'Cars',
    },
    {
        id: '3',
        name: 'Cinema',
    },
    {
        id: '4',
        name: 'Coding',
    },
    {
        id: '5',
        name: 'Decoration',
    },
    {
        id: '6',
        name: 'Alcohol',
    },
    {
        id: '7',
        name: 'Journalism',
    },
    {
        id: '8',
        name: 'Finance',
    },
    {
        id: '9',
        name: 'Formula 1',
    },
    {
        id: '10',
        name: 'maths',
    },
    {
        id: '11',
        name: 'Science',
    },
    {
        id: '12',
        name: 'Christianity',
    },
    {
        id: '13',
        name: 'Architecture',
    },
    {
        id: '14',
        name: 'Painting',
    },
    {
        id: '15',
        name: 'Printing',
    },
    {
        id: '16',
        name: 'Books',
    },
    {
        id: '17',
        name: 'Sound',
    },
    {
        id: '18',
        name: 'Music',
    },
    {
        id: '19',
        name: 'School',
    },
    {
        id: '20',
        name: 'Geography',
    },
    {
        id: '21',
        name: 'French',
    },
    {
        id: '22',
        name: 'English',
    },
    {
        id: '23',
        name: 'Designing',
    },
    {
        id: '24',
        name: 'Sport',
    },
    {
        id: '25',
        name: 'Photography',
    },
    {
        id: '26',
        name: 'Tech',
    },
    {
        id: '27',
        name: 'YouTube',
    },
    {
        id: '28',
        name: 'Clothing',
    },
];

export const users = [
    {
        id: '1',
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/300',
        topics: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        posts: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        communities: ['1', '2'],
        followers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        following: ['2', '3'],
        bio: 'I am a developer',
        location: 'London',
        joined: '2022-01-01',
        Email: 'kxq5q@example.com',
        username: 'johndoe',
        password: '123456',
    },
    {
        id: '2',
        name: 'Jane Doe',
        avatar: 'https://i.pravatar.cc/300',
        topics: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        posts: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        communities: ['3'],
        followers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        following: ['1', '3'],
        bio: 'I am a developer',
        location: 'London',
        joined: '2022-01-01',
        Email: 'kxq5q@example.com',
        username: 'janedoe',
        password: '123456',
    },
    {
        id: '3',
        name: 'John Smith',
        avatar: 'https://i.pravatar.cc/300',
        topics: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        posts: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        communities: ['1', '2'],
        followers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        following: ['1', '2'],
        bio: 'I am a developer',
        location: 'London',
        joined: '2022-01-01',
        Email: 'kxq5q@example.com',
        username: 'johnsmith',
        password: '123456',
    }
]

export const posts = [
    {
        id: '1',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        topics: ['1', '2', '18'],
        user: '2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likes: ['1', '2', '3', '4', '5', '6', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        comments: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        created: '2022-01-01',
        updated: '2022-01-01',
        Image: 'https://i.pravatar.cc/300',
        ImageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: '2',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        topics: ['10', '25', '3'],
        user: '1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        comments: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        created: '2022-02-01',
        updated: '2022-01-01',
        Image: 'https://s3-alpha-sig.figma.com/img/e477/494e/59fdfb1d7df2329427e3f4cb7c88f321?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FF1oqEg8ChPbl8bC6nCB7eF6xrb0Xowp9xhYhCTCqZV8kD5urWn5CtrdeHz0SwdHl56HNdtMz~cZkvyhv27~CUQbbBO7n9y8gi8A9OIe4wfVrzbHV9rJdw9sn0ypR5YzuMKQfdwRIII9zkg-J35vynqdz7pOGCXTkTvTCzNKq9pW683XCuVDD3HlMLPv20zRarOp3XzmITvjdAAVuipqVnMyNat99K~LhYvARZIQaz3sC~u-awbutHyX9FbPGFtzC9bEXYFYdDnEOksCA2KzvY7sexMzsd0hBLnYE9g9LUrywvjorIZHGZ6eLlWW7ViBywCeqBhERN5wopx6~yF-Pg__',
        ImageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: '3',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        topics: ['7', '10', '23'],
        user: '3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        comments: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        created: '2022-01-01',
        updated: '2022-01-01',
        Image: 'https://i.pravatar.cc/300',
        ImageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
]

export const communities = [
    {
        id: '1',
        name: 'Gaming',
        topics: ['1', '2', '3'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        members: ['1', '2', '3'],
        created: '2022-01-01',
        updated: '2022-01-01',
        Image: 'https://loremflickr.com/320/240',
    },
    {
        id: '2',
        topics: ['4', '5', '6'],
        name: 'Cars',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        members: ['1', '2', '3'],
        created: '2022-01-01',
        updated: '2022-01-01',
        Image: 'https://loremflickr.com/320/240/city',
    },
    {
        id: '3',
        name: 'Community Name',
        topics: ['7', '8', '9'],
        description: 'Small description of the community.',
        members: [ '2', '3'],
        created: '2022-06-01',
        updated: '2022-01-01',
        Image: 'https://s3-alpha-sig.figma.com/img/2866/fcb6/17cfae3f195f3c50f04b7db7750ab3b2?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Efgd11kXQloIXIMe-cvTllUvLZaGUByk2U0BgzgTL9YuRwoKS~q7f7G~zqHLo7njacS45YU7iBAjM9w48MK00w3dlvy2kS5NKe6eTUqk405NW4Wm-RlayuPnVhUtj1D8havUKZjCJvX4gA-gTZWTUOyVxR-togbxukanHGu6Jods79IQj11ARwwn8btPr0HLcBBJwBf~Fdc7rGMWS5ikbRAu5D5eMWwQ688h1hTMFsk0ds-fyJc7kWxa-AJlrMHjLKa9woO~q2q8tI7xJm8zzupKDKW5AsoGgslxzRbiRWt9xk6j2MK2q18SgKM-0IeAHFnoW0L1H-PCTzIUCFQETA__',
    },
];