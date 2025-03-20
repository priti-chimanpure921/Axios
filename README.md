<h1>Axios :</h1>
It is a library to make http requests.
Axios internally use fetch only.
<h3>axios.get(url)</h3> 
No need to parse data as we do in fetch(url) method.
Using axios we get direct data.

<h3>Sending headers with axios request :<h3>
<ul>
<li>const config = { headers: { Accept : "application/json" }};</li>
<li>let res = await axios.get(url,config);</li>
</ul>


<h3>Updating query strings in axios :</h3>
<ul><li>let res = await axios.get(url + variableName);</li></ul>