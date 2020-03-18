  // O Objeto com os Stories estão fixos para testes, o campo stories deve ser 
  // preenchido com um array de stories de cada usuário
  // cada item do array de stories é um array de duas posições, sendo a primeira
  // o id de cada story e a segunda posição 1 ou 0 para visto ou não visto
  // para teste estou usando o pravatar para gerar imagens aleatórias para os usuários
export default {
    conversations: [
        {
            id:'1',
            name:'Edson',
            image:'https://i.pravatar.cc/300',
            lastMessageTime: "09:00",
            message: [true, 10, "Lorem Ipsum"],
            latestMessages: [
                {   
                    id:'1',
                    my: true,
                    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    sendDate: "2013-02-08 09:30"
                },
                {
                    id:'2',
                    my: false,
                    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    sendDate: "2013-02-08 09:31"
                },
                {   
                    id:'3',
                    my: true,
                    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    sendDate: "2013-02-08 09:32"
                },
                {
                    id:'4',
                    my: true,
                    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    sendDate: "2013-02-08 09:32"
                },
                {   
                    id:'5',
                    my: true,
                    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    sendDate: "2013-02-08 09:32"
                },
                {   
                    id:'6',
                    my: false,
                    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    sendDate: "2013-02-08 09:33"
                },
                {   
                    id:'7',
                    my: true,
                    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    sendDate: "2013-02-08 09:34"
                },
                {   
                    id:'8',
                    my: true,
                    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    sendDate: "2013-02-08 09:34"
                },
                {   
                    id:'9',
                    my: true,
                    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    sendDate: "2013-02-08 09:34"
                },
                {   
                    id:'10',
                    my: false,
                    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    sendDate: "2013-02-08 09:35"
                },
                {   
                    id:'11',
                    my: true,
                    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    sendDate: "2013-02-08 09:40"
                },
                {   
                    id:'12',
                    my: true,
                    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    sendDate: "2013-02-08 09:40"
                },
            ]
        },
        {
            id:'2',
            name:'Elon',
            image:'https://i.pravatar.cc/300',
            lastMessageTime: "09:00",
            message: [true, 10, "Lorem Ipsum"]
        },
        {
            id:'3',
            name:'Kobayashi',
            image:'https://i.pravatar.cc/300',
            lastMessageTime: "09:00",
            message: [false, 10, "Lorem Ipsum"]
        },
        {
            id:'4',
            name:'Mary',
            image:'https://i.pravatar.cc/300',
            lastMessageTime: "09:00",
            message: [false, 10, "Lorem Ipsum"]
        },
        {
            id:'5',
            name:'Han',
            image:'https://i.pravatar.cc/300',
            lastMessageTime: "09:00",
            message: [false, 10, "Lorem Ipsum"]
        },
        {
            id:'6',
            name:'Alice',
            image:'https://i.pravatar.cc/300',
            lastMessageTime: "09:00",
            message: [false, 10, "Lorem Ipsum"]
        },
        {
            id:'7',
            name:'Philip',
            image:'https://i.pravatar.cc/300',
            lastMessageTime: "09:00",
            message: [false, 10, "Lorem Ipsum"]
        },
        {
            id:'8',
            name:'Yrie',
            image:'https://i.pravatar.cc/300',
            lastMessageTime: "09:00",
            message: [false, 10, "Lorem Ipsum"]
        },
        {
            id:'9',
            name:'Stephen Trevor',
            image:'https://i.pravatar.cc/300',
            lastMessageTime: "09:00",
            message: [false, 10, "Lorem Ipsum"]
        },
        {
            id:'10',
            name:'Michael Lensi',
            image:'https://i.pravatar.cc/300',
            lastMessageTime: "09:00",
            message: [false, 10, "Lorem Ipsum"]
        },
        {
            id:'11',
            name:'Kara Denver',
            image:'https://i.pravatar.cc/300',
            lastMessageTime: "09:00",
            message: [false, 10, "Lorem Ipsum"]
        },
        {
            id:'12',
            name:'Jhon dick',
            image:'https://i.pravatar.cc/300',
            lastMessageTime: "09:00",
            message: [false, 10, "Lorem Ipsum"]
        }
    ],
    story: [
        {
            id: '1',
            name: 'Edson',
            avatar: 'https://i.pravatar.cc/300',
            online: true,
            viewed: true,
            stories: [
                {
                    id: '1',
                    data: '2013-02-08 09:30',
                    image: 'https://i.pravatar.cc/300',
                    viewed: true,
                },
                {
                    id: '2',
                    data: '2013-02-08 09:30',
                    image: 'https://i.pravatar.cc/300',
                    viewed: true,
                }
            ]
        },
        {
            id: '2',
            name: 'Kobayashi',
            avatar: 'https://i.pravatar.cc/300',
            online: true,
            viewed: true,
            stories: [
                {
                    id: '1',
                    data: '2013-02-08 09:30',
                    image: 'https://i.pravatar.cc/300',
                    viewed: true,
                }
            ]
        },
        {
            id: '3',
            name: 'Elon',
            avatar: 'https://i.pravatar.cc/300',
            online: true,
            viewed: true,
            stories: [
                {
                    id: '1',
                    data: '2013-02-08 09:30',
                    image: 'https://i.pravatar.cc/300',
                    viewed: true,
                }
            ]
        },
        {
            id: '4',
            name: 'Mary',
            avatar: 'https://i.pravatar.cc/300',
            online: true,
            viewed: true,
            stories: [
                {
                    id: '1',
                    data: '2013-02-08 09:30',
                    image: 'https://i.pravatar.cc/300',
                    viewed: true,
                }
            ]
        },
        {
            id: '5',
            name: 'Han',
            avatar: 'https://i.pravatar.cc/300',
            online: true,
            viewed: true,
            stories: [
                {
                    id: '1',
                    data: '2013-02-08 09:30',
                    image: 'https://i.pravatar.cc/300',
                    viewed: true,
                }
            ]
        }
    ]
}