export const htmlResponse = (html: string) => 
    new Response(html, { headers: { "Content-Type": "text/html" } });

export const redirect = (url: string) =>
    new Response(null, {
        status: 302,
        headers: { Location: url }
    });