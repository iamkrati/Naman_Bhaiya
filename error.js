const json="{name: 'john'}"

try
{
    console.log("try block start");
    throw new SyntaxError("this is a syntax error");
}
catch(err)
{
    console.log(err);
}


