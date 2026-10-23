export async function POST(request: Request){
    const body = await request.json();

    console.log("Contact form subsmission: ", body);
    return Response.json({message: "Contact endpoint is working!", 
        
    });
}