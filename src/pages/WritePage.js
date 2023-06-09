import {TextField, button} from "@mui/material";

export default function WritePage() {
  const onSubmit=(e)=> {
    e.preventDefault();

    const form = e.target;

    if ( form.regDate.value.length == 0){
      alert("날짜를 입력해주세요.");
      form.regDate.focus();
      return;
    }

    if ( form.regDate.value.length == 0){
      alert("내용을 입력해주세요.");
      form.content.focus();
      return;
    }
  }
    return (
      <>
        <form className="felx-1 flex p-10 flex-col gap-7 " onSubmit={onSubmit}>
          <TextField label="언제 해야하나요?" focused type="datetime-local" name="regDate"/>

          <TextField 
            label="무엇을 해야하나요?"
            name="content"  
            className="flex-1 flex" 
            multiline 
            InputProps={{className : "flex-1 flex-col"}}
            inputProps={{className : "flex-1 bg-green-500 "}}
            placeholder="할 일을 입력해주세요."/>
            
            <button type="submit" variant="contained">
              <span>
                <i class="fa-solid fa-pencil"></i>
              </span>
              <span>&nbsp;</span>
              <span>할 일 추가</span>
            </button>
        </form>
      </>
    );
  }