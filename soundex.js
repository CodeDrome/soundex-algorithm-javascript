
function soundex(name)
{
    let s = [];
    let si = 1;
    let c;

    //              ABCDEFGHIJKLMNOPQRSTUVWXYZ
    let mappings = "01230120022455012623010202";

    s[0] = name[0].toUpperCase();

    for(let i = 1, l = name.length; i < l; i++)
    {
        c = (name[i].toUpperCase()).charCodeAt(0) - 65;

        if(c >= 0 && c <= 25)
        {
            if(mappings[c] != '0')
            {
                if(mappings[c] != s[si-1])
                {
                    s[si] = mappings[c];
                    si++;
                }

                if(si > 3)
                {
                    break;
                }
            }
        }
    }

    if(si <= 3)
    {
        while(si <= 3)
        {
            s[si] = '0';
            si++;
        }
    }

    return s.join("");
}
