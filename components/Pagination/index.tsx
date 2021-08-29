import React from 'react';
import Image from 'next/image';

import { Separator, PaginationWrap, PaginationButton, PaginationArrow, PaginationButtons } from './styled'

import prevArr from './assets/prev-icon.png';
import nextArr from './assets/next-icon.png';

interface PaginationProps {
    current: number,
    all: number,
    changePage: (p: number) => void,
    options?: {
        buttonsVisible?: number,
        activeButtonCenterOffset?: number
        separator?: string
    }
}

const Pagination: React.FC<PaginationProps> = ({ current, all, changePage, options }) => {
    const pageNumbers = [...Array(all)].map((y, index) => ++index);
    const separator = options?.separator || "..";

    const visibleButtons = options?.buttonsVisible || 6;
    const paginationRequired = all > visibleButtons;

    const activeButtonCenterOffset = options?.activeButtonCenterOffset || 2;

    const leftLimit = visibleButtons - 1;
    const middleLimit = visibleButtons - 2;
    const rightLimit = all - middleLimit;

    const leftSeparatorRequired = current < leftLimit;
    const rightSeparatorRequired = current > rightLimit;
    const bothSeparatorsRequired = current <= rightLimit && current >= leftLimit;

    const button = (x: number) => <PaginationButton 
        key={x} 
        onClick={() => changePage(x)} 
        active={current === x}
        >
            {x}
        </PaginationButton>

    const separatorElement = (s: string, salt: number) => <Separator key={salt + s}>{s}</Separator>

    const createButtonsChunks = () => {
        if(paginationRequired) {
            if(leftSeparatorRequired) {
                const leftChunk = [...[...pageNumbers].splice(0, leftLimit)];
                const rightChunk = [pageNumbers[all - 1]];
                return [leftChunk, rightChunk];
            } 
            else if(bothSeparatorsRequired) {
                const leftChunk = [1];
                const middleChunk = [...[...pageNumbers].splice(current - activeButtonCenterOffset, middleLimit)];
                const rightChunk = [pageNumbers[all - 1]];
                return [leftChunk, middleChunk, rightChunk];
            } 
            else if(rightSeparatorRequired) {
                const leftChunk = [1];
                const rightChunk = [...[...pageNumbers].splice(all - leftLimit, visibleButtons)]
                return [leftChunk, rightChunk];
            } 
        }
        return [pageNumbers];
    }

    const renderButtons = (chunksArray: Array<Array<number>>) => chunksArray.reduce<Array<JSX.Element>>((result, chunk, index, array) => {
        const buttons = chunk.map(item => button(item));
        if(array.length - 1 !== index) return result.concat(buttons, separatorElement(separator, index));
        else return result.concat(buttons);
    }, []);

    return (
        all > 1 ? <PaginationWrap>
            <PaginationButtons>
                <PaginationArrow disabled={current === 1} onClick={() => changePage(current - 1)}><Image src={prevArr} alt="prev-arrow" /></PaginationArrow>
                {renderButtons(createButtonsChunks())}
                <PaginationArrow disabled={current === all} onClick={() => changePage(current + 1)}><Image src={nextArr} alt="next-arrow" /></PaginationArrow>
            </PaginationButtons>
        </PaginationWrap> : null
    )
};

export default React.memo(Pagination);