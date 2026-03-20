

function ListCategories(props) {
    
    return (
        <>
            <div className="w-10/12 mx-5 grid grid-cols-1 md:m-auto">
                <p className="text-acc2 text-4xl mb-5 capitalize">categorias</p>
                <div className=" w-12/12 grid grid-cols-2 gap-1 text-2xl md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 ">
                    {props.category.map((item) => (
                        <p className="bg-acc2 rounded-xl px-5" key={item.idCategory}>
                            {item.strCategory}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ListCategories;
