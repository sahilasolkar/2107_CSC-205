function binarySearch(arr, x, start, end)
{
    if(start>end)
    {
        return false;
    }

    let mid=Math.floor((start+end)/2);
    if (arr[mid]==x)
    {
        return true;
    }
    if (arr[mid]>x)
    {
        return binarySearch(arr, x, start, mid-1);
    }
    else
    {
        return binarySearch(arr, x, mid+1, end);
    }
}

function Validate()
{
    var ele = document.getElementById("num").value;
    let arr = [1, 4, 6, 8, 10, 15, 99];
    if(binarySearch(arr, ele, 0, arr.length-1))
    {
        alert("the element : "+ele+" is present in teh array!");
    }
    else
    {
        alert("oops! sorry the element: "+ele+" is not present in the array!");
    }
}