window.onload = () => {
    
//Add new TO do in the list
    var mybtn = document.getElementById('ip');
    
    mybtn.addEventListener( 'submit' ,(e) => {
        e.preventDefault();
        var task = document.getElementById('task').value.trim;
        //alert(task);

        document.getElementById('todos').innerHTML += "<li><div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox'> "+ task +" <i class='input-helper'></i></label> </div> <i class='remove fa fa-trash'></i></li>";
    });

//dlt or cut-out the clicked task 

    var list = document.getElementById('todos');
    todos.addEventListener('click', (e) => {
       
        // dlt task if clicked on trash icon
        if(e.target.classList.contains('remove')){
            e.target.parentElement.remove();
        }else{
            if(e.target.classList.contains('checkbox')){
            //undo the cut-out line if already marked as done    
                if(e.target.parentElement.parentElement.classList.contains('completed'))
                    e.target.parentElement.parentElement.classList.remove('completed');
                else
                    e.target.parentElement.parentElement.classList.add('completed');
            }
        }


    });


}