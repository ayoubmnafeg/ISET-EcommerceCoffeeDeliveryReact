import { Container, Submit } from "./styled"
import {
    Caption,
    Card,
    TitleForm,
    InputContainer,
} from "./../FormPayment/styled";
import { FaCoffee } from "react-icons/fa";


export default function AddToMenu() {
return (
    <Container>
        <Card>
            <form action="#" method="post">
                <TitleForm>
                    <FaCoffee className="laranja" />
                    &nbsp;&nbsp;Add to menu
                </TitleForm>
                <Caption>
                    Enter the new article you want to add in your menu
                </Caption>
                <InputContainer>
                    <input type="text" placeholder="title" />
                    <input type="text" placeholder="description" />
                </InputContainer>
                <InputContainer>
                    <input type="text" placeholder="price" />
                    <input type="text" placeholder="tags" />
                    <input type="text" placeholder="amount" />
                    <input type="file" placeholder="srcImg" />
                </InputContainer>
                <InputContainer>
                    <Submit type="submit" value="Add"/>
                </InputContainer>
            </form>
        </Card>
    </Container>
);}