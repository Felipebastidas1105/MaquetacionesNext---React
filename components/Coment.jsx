import Image from "next/image"

const clients =
[{
    text: 'this is a template figma file',
    author_image: '/public/author1.jpg',
    author: 'gemma nolen',
    ranking: 5,
    company: 'Google',
    inicio:'uiii'
},
{
    text: 'this is a template figma file',
    author_image: 'author2.jpg',
    author: 'gemma nolen',
    ranking: 5,
    company:'Google'
},
{
    text: 'this is a template figma file',
    author_image: 'author3.jpg',
    author: 'gemma nolen',
    ranking: 5,
    company:'Google'
},
]

const Coment= () => {
  return (
    <>
    <h2 className="bg-red-800">Clients</h2>
    <div className="bg-red-600">
     {
      clients.map((client,index)=>{
        <div key={index}>
            <h3>{client.inicio}</h3>
            <div>
                <Image src={`/public/${client.author_image}`} alt="author_img"  width='50'   heigth='50' ></Image>
                <p>
                    <Image src={'/public/star.jpg'} width='50'   heigth='50' />
                    {client.author}<br />
                    {client.company}</p>
            </div>
           
        </div>
      }) 
    }
    </div>
    </>

  );
}
export default Coment;
