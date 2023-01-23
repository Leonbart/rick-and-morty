import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const DivAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 0 1rem;
    background-color: rgb(115, 115, 115, 0.8);
    color: rgba(230, 230, 230, 1);
`;

const PPlot = styled.p`
    text-align: justify; 
`;

const DivBtnHome = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
`;


export default function About() {
    const navigate = useNavigate();

    return (
        <DivAbout>
            <h1>Rick & Morty App</h1>
            <h3>With this App you will be able to display the info about all your favorite characters of Rick and Morty.</h3>
            <PPlot>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often travelling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson into hijinks.</PPlot>
            <p>Created by: Leonardo Alabart</p>
            <DivBtnHome>
                <Button
                    text='HOME'
                    onClick={() => navigate('/home')}
                />
            </DivBtnHome>
        </DivAbout>
    )
}