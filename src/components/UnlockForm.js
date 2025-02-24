"use client";
import React, { useState } from 'react';
import { ethers } from 'ethers';
import useIpfsAndEthereum from '../hooks/useIpfsAndEthereum';

const UnlockForm = () => {
    const { contract, loading } = useIpfsAndEthereum(); // Use the hook
    const [paperId, setPaperId] = useState('');
    const [fileUrl, setFileUrl] = useState('');
    const [loadingForm, setLoadingForm] = useState(false);
    const [fileContent, setFileContent] = useState(null);

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingForm(true);

        try {
            if (loading) {
                alert('Contract is initializing, please wait.');
                return;
            }

            if (!contract) {
                alert('Smart contract is not initialized.');
                return;
            }

            // Call the unlockPaper function from the smart contract
            const tx = await contract.unlockPaper(paperId);
            await tx.wait();

            // Fetch IPFS hash
            const ipfsHash = await contract.getIpfsHash(paperId);
            const ipfsUrl = `https://black-worldwide-tiger-431.mypinata.cloud/ipfs/${ipfsHash}`;

            // Fetch file content from IPFS
            const response = await fetch(ipfsUrl);
            const data = await response.blob();
            setFileContent(data);
            setFileUrl(ipfsUrl);

            alert('Paper unlocked successfully');
        } catch (error) {
            console.error('Error unlocking file:', error);
            alert('Error unlocking file. Make sure you are authorized and the unlock time has passed.');
        } finally {
            setLoadingForm(false);
        }
    };

    const handleDownload = () => {
        if (fileContent) {
            const url = URL.createObjectURL(fileContent);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `file_download${fileContent}`; 
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }
    };
    return (
        <div className="container p-4 ">

            <form onSubmit={handleSubmit} className='flex flex-col'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900" htmlFor="PaperId">Enter File Id :</label>
            <input className='p-2 mb-4 rounded-lg shadow-md ' type="text" placeholder="File ID" value={paperId} onChange={(e) => setPaperId(e.target.value)} required />
        
                <button type="submit" className='bg-blue-900 hover:bg-blue-600 hover:transition-colors text-white w-36 text-sm mx-auto rounded-xl p-2 font-semibold' disabled={loading}>{loadingForm ? 'Unlocking...' : 'Unlock'}</button>
            </form>
            { fileUrl && (
                <div className='mt-5 flex '>
                    <a href={fileUrl} className='text-center bg-blue-700 text-white w-36 text-sm mx-auto rounded-xl p-2 font-semibold' target="_blank" rel="noopener noreferrer">View File</a> {/* Link to view paper */}
                    <button className='bg-blue-700 text-white w-36 text-sm mx-auto rounded-xl p-2 font-semibold' onClick={handleDownload}>Download File</button> {/* Button to download paper */}
                </div>
            )}
        </div>
    );
};

export default UnlockForm;
