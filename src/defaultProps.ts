import {mapValues, without} from 'lodash-es'
export const commonDefaultProps = {
    // actions
    actionType: '',
    url: '',
    // size
    height: '',
    width: '318px',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    //border type
    borderStyle: 'none',
    borderColor: '#000',
    borderWidth: '0',
    borderRadius: '0',
    // show and opacity
    boxShadow: '0 0 0 #000000',
    opacity: 1,
    // posistion and x,y
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0'
}

export const textDefaultProps = {
    // basic props - font styles
    text: '正文内容',
    fontSize: '14px',
    fontFamily: '',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '1',
    textAlign: 'left',
    color: '#000000',
    backgroundColor: '',
    ...commonDefaultProps
}

export interface TextComponentProps {
    text: string;
    fontSize: string;
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    textDecoration: string;
    lineHeight: string;
    textAlign: string;
    color: string;
    backgroundColor: string;
}

export const textStylePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text')
export const transformToComponentProps =<T extends {[key: string]: any}>(props: T) => {
    return mapValues(props, (item) => {
        return {
            type: item.constructor,
            default: item
        }
    })
}
