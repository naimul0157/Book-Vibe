import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getstoredBook } from '../../utility/addToDb';
import { useLoaderData } from 'react-router';
import { Store } from 'lucide-react';
import Details from './Details/Details';

const Readlist = () => {
    const [myreadlist, setreadlist] = useState([]);
    // this is for reverse data order
    const reverseData = myreadlist.reverse();
    const data = useLoaderData();
    // console.log(data);
    useEffect(() => {
        const StoredData = getstoredBook();
        const Readlistdata = data.filter(book => StoredData.includes(book.bookId));
        setreadlist(Readlistdata);
    }, [])

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read</Tab>
                    <Tab>WishList</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        {
                           reverseData.map(data=>  <Details data={data}></Details>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>This is wish</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Readlist;