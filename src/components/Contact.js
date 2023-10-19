const Contact = () => {
    return (<div>
        <h1 className="font-bold text-xl text-center">Contact Us</h1>
        <div>
        <form className="mx-auto p-2 m-2" action="">
            <input className="border border-black m-2 p-2 block rounded-sm w-4/12 mx-auto" type="text" placeholder="Name"/>
            <input className="border border-black m-2 p-2 block rounded-sm w-4/12 mx-auto" type="text" placeholder="Message"/>
            <button className="bg-slate-300 p-2 my-4 rounded-md block w-2/12 mx-auto">Submit</button>
        </form>
        </div>
    </div>)
}

export default Contact