import React, { useEffect, useRef, useState, } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { editperDay, getPerDay } from '../Per-DayReducer';
import { Col, Form, Row, Table, Button } from 'react-bootstrap';
// import { toast } from 'react-toastify';
// import { changePerday } from './../reducers/ChildrenNumberReducer';
import { Modal } from 'react-bootstrap';
// import { getAttachment } from '../reducers/MealReducer';
// import LoadingPage from './LoadingPage';

function AllMenuTable({ perDay, getPerDay }) {

    const [show2, setShow2] = useState(false);
    const [show, setShow] = useState(false);
    const [showLoad, setShowLoad] = useState(false);
    const [date, setDate] = useState(false);

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);
    // const childrn = useSelector(state => state.childrenNumber);
    // const photo = useSelector(state => state.meal.attachmant);
    const dispatch = useDispatch();
    const update = useRef(false);
    const [perDayState, setPerDayState] = useState([]);
    const [onenumberOfChildrenDTOList, setOnenumberOfChildrenDTOList] = useState([]);
    const [numberOfChildrenDTOList, setnumberOfChildrenDTOList] = useState([]);


    // useEffect(() => {
    //     if (update.current === false) {

    //     } else {
    //         // toast.success(childrn?.result?.text);
    //         getPerDay(date);

    //     }
    //     setShowLoad(false);
    // }, [childrn?.result]);

    useEffect(() => {
        if (update.current === false) {

        } else {
            // toast.success(perDay?.result?.text);
            getPerDay(date);
        }
        setShowLoad(false);
    }, [perDay?.result]);

    // useEffect(() => {
    //     if (update.current === false) {

    //     } else {
            // toast.error(childrn?.error);
            // toast.error(childrn?.error?.error);
            // toast.error(childrn?.error?.text);
    //     }
    //     setShowLoad(false);
    // }, [childrn.error]);


    useEffect(() => {
        if (update.current === false) {
            update.current = true;
            getPerDay();
        }
    }, []);

    useEffect(() => {
        setPerDayState(perDay?.perDay);
    }, [perDay]);

    function getValue(obj) { return obj === null ? "-" : obj }

    const statusPerday = (status) => {
        // dispatch(changePerday(status));
        setShowLoad(true);
    }

    const editChildrenNumber = (data) => {
        handleShow();
        setOnenumberOfChildrenDTOList(data);
        setnumberOfChildrenDTOList(data.numberOfChildrenDTOList);
    }

    const handleChangeNumber = (index) => (e) => {
        let mttChildrenNumbers = [...numberOfChildrenDTOList];
        mttChildrenNumbers[index] = { ...mttChildrenNumbers[index], 'number': e.target.value };
        setnumberOfChildrenDTOList(mttChildrenNumbers);
    }
    const submitMttChildren = () => {
        console.log(onenumberOfChildrenDTOList, "onenumberOfChildrenDTOList");
        let submit = {
            id: onenumberOfChildrenDTOList.id,
            kindergartenId: onenumberOfChildrenDTOList.kindergartenId,
            numberOfChildrenDTOList: numberOfChildrenDTOList
        }
        var formData = new FormData();
        var jsonString = JSON.stringify(submit);
        formData.append('jsonString', jsonString);
        dispatch(editperDay(formData, submit.id));
        handleClose();
    }


    const wiewPhoto = (id) => {
        if (id !== null) {
            // dispatch(getAttachment(id));
            handleShow2();
        } else {
            // toast.error("Bolalar soni biriktirilmagan!");
        }
    }

    const styleFunction = (name) => {

        if (name === 'TASDIQLANDI') {
            return { color: 'blue', fontWeight: 'bold' }
        } else if (name === 'KIRITILDI') {
            return { color: '#ff9000', fontWeight: 'bold' }
        } else if (name === 'NOANIQ') {
            return { color: 'red', fontWeight: 'bold' }
        } else if (name === 'QABUL QILINDI') {
            return { color: 'green', fontWeight: 'bold' }
        }
    }

    const [productSupplierSearch, setProductSupplierSearch] = useState('');
    const [ascDesc, setAscDesc] = useState("asc");

    function dateSubmit(e) {
        e.preventDefault();
        var date = new Date(e.target.date.value).getTime();
        getPerDay({ date: date });
        setDate({ date });
    }

    const productsss = perDayState?.filter(item => item?.district?.name?.toLowerCase().includes(productSupplierSearch?.toLowerCase()));

    function toLowerC(data) {

        if (typeof data === 'string') {
            return data.toLowerCase();
        } else {
            return data;
        }
    }


    const tablesorted = (data) => {
        var sorted = [];
        if (ascDesc === 'asc') {
            sorted = [...productsss].sort((a, b) =>
                (toLowerC(a[data].name) < toLowerC(b[data].name)) ? 1 : -1
            );
            setAscDesc('desc');
        } else {
            sorted = [...productsss].sort((a, b) =>
                (toLowerC(a[data].name) > toLowerC(b[data].name)) ? 1 : -1
            );
            setAscDesc('asc');
        }
        setPerDayState(sorted);
    }



    return (
        <div className='container mt-4'>
            <Form onSubmit={dateSubmit} className='mb-3'>
                <Row>
                    <Col xs={6} md={2} lg={2} xl={2}>
                        <Form.Control name={'date'} type={'date'} required />
                    </Col>
                    <Col xs={6} md={2} lg={2} xl={2}>
                        <Button color='outline-info' type='submit' size='sm'>ok</Button>
                    </Col>
                    <Col xs={6} md={3} lg={3} xl={3}>
                        <Form.Control name={'search'} type={'text'} onChange={(e) => setProductSupplierSearch(e.target.value)} placeholder='Tumanlarni qidirish' />
                    </Col>
                </Row>
            </Form>

            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>MTT</th>
                        {perDayState[0]?.perDayList[0].numberOfChildrenDTOList.map((item, index) =>
                            <th key={index}>{getValue(item?.ageGroupName)}</th>
                        )}
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {productsss?.map((item, index) =>
                        <>
                            <tr key={index}>
                                <td colSpan='100%'><h5 style={{ textAlign: 'center', fontWeight: 'bolder' }}>{item.district.name}</h5></td>
                            </tr>
                            {item.perDayList.map((item2, index2) =>
                                <tr key={index2}>
                                    <td>{index2 + 1}</td>
                                    <td>{getValue(item2.kindergartenName)}</td>
                                    {item2.numberOfChildrenDTOList.map((item3, index3) =>
                                        <td key={index3}>{getValue(item3.number)}</td>
                                    )}
                                    <td style={styleFunction(item2.status)}>{item2.status} </td>
                                </tr>
                            )}
                        </>
                    )}
                </tbody>
            </Table>
            {/* <LoadingPage load={showLoad} /> */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{onenumberOfChildrenDTOList.kindergartenName} ni  bolalar sonini o'zgartirish</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Yosh toifasi</th>
                                <th>Kiritish</th>
                            </tr>
                        </thead>
                        <tbody>
                            {numberOfChildrenDTOList.map((item, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.ageGroupName}</td>
                                    <td><input type="number" value={item.number} onChange={handleChangeNumber(index)} className='tdInput' /></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Yopish
                    </Button>
                    <Button variant="info" onClick={() => submitMttChildren()}>
                        Tayyor
                    </Button>
                </Modal.Footer>
            </Modal>



            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Bolalar soni</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <img src={"data:image/png;base64," + photo?.bytes} width="100%" alt="" /> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Yopish
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default connect(({ perDay }) => {
    return {
        perDay: perDay,
    }
}, { getPerDay })(AllMenuTable)