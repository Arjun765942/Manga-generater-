
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { ComicFace, INITIAL_PAGES, GATE_PAGE } from './types';
import { LoadingFX } from './LoadingFX';

interface PanelProps {
    face?: ComicFace;
    allFaces: ComicFace[]; // Needed for cover "printing" status
    onChoice: (pageIndex: number, choice: string) => void;
    onOpenBook: () => void;
    onDownload: () => void;
    onReset: () => void;
}

export const Panel: React.FC<PanelProps> = ({ face, allFaces, onChoice, onOpenBook, onDownload, onReset }) => {
    // Enhanced empty state for pages that don't exist yet (e.g. placeholder back of book)
    if (!face) {
        return (
             <div className="w-full h-full bg-[#151515] relative overflow-hidden border-l border-[#333]">
                {/* Dark Halftone Pattern */}
                <div className="absolute inset-0 opacity-10" 
                     style={{
                         backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1.2px)',
                         backgroundSize: '12px 12px'
                     }} 
                />
            </div>
        );
    }

    if (face.isLoading && !face.imageUrl) return <LoadingFX />;
    
    const isFullBleed = face.type === 'cover' || face.type === 'back_cover';

    return (
        <div className={`panel-container relative group h-full w-full overflow-hidden ${isFullBleed ? '!p-0 !bg-[#0a0a0a]' : 'bg-white comic-noise'}`}>
            <style>{`
                .comic-noise {
                    background-color: #fdfdfd;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
                }
                .dynamic-gloss {
                    background: linear-gradient(125deg, 
                        rgba(255,255,255,0) 30%, 
                        rgba(255,255,255,0.15) 45%, 
                        rgba(255,255,255,0.4) 50%, 
                        rgba(255,255,255,0.15) 55%, 
                        rgba(255,255,255,0) 70%);
                    mix-blend-mode: soft-light;
                    background-size: 200% 200%;
                    background-position: 0% 0%;
                    transition: background-position 0.6s ease-out;
                }
                .panel-container:hover .dynamic-gloss {
                    background-position: 100% 100%;
                }
                .halftone-bg {
                    background-color: #f0f0f0;
                    background-image: radial-gradient(#cbd5e1 1.5px, transparent 1.5px), radial-gradient(#cbd5e1 1.5px, transparent 1.5px);
                    background-size: 20px 20px;
                    background-position: 0 0, 10px 10px;
                }
            `}</style>

            {/* --- VISUAL LAYERS --- */}
            
            {/* 1. Paper Texture (Noise) - Overlay for content (adds grit to the ink) */}
            <div className="absolute inset-0 comic-noise opacity-40 z-30 pointer-events-none mix-blend-multiply"></div>
            
            {/* 2. Dynamic Gloss - Reflective sheen */}
            <div className="dynamic-gloss absolute inset-0 z-40 opacity-90 pointer-events-none"></div>
            
            {/* 3. Vignette/Depth Shadow */}
            <div className="absolute inset-0 z-30 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.1)]"></div>


            {/* --- CONTENT LAYER --- */}
            {face.imageUrl ? (
                <img src={face.imageUrl} alt="Comic panel" className={`panel-image relative z-10 ${isFullBleed ? '!object-cover w-full h-full' : 'object-contain'}`} />
            ) : (
                /* Fallback layout for non-loading but no image state */
                 <div className="w-full h-full halftone-bg flex flex-col items-center justify-center relative z-10 p-4">
                     <div className="border-4 border-dashed border-gray-300 w-full h-full flex flex-col items-center justify-center rounded-lg opacity-60">
                         <span className="font-comic text-gray-400 text-3xl opacity-80 animate-pulse">?</span>
                         <span className="font-comic text-gray-400 text-sm mt-2 tracking-widest uppercase">Panel Pending</span>
                     </div>
                 </div>
            )}
            
            {/* --- UI LAYER (Buttons & Overlays) --- */}
            
            {/* Decision Buttons */}
            {face.isDecisionPage && face.choices.length > 0 && (
                <div className={`absolute bottom-0 inset-x-0 p-6 pb-12 flex flex-col gap-3 items-center justify-end transition-opacity duration-500 ${face.resolvedChoice ? 'opacity-0 pointer-events-none' : 'opacity-100'} bg-gradient-to-t from-black/95 via-black/70 to-transparent z-50`}>
                    <p className="text-white font-comic text-2xl uppercase tracking-widest animate-pulse drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">What drives you?</p>
                    {face.choices.map((choice, i) => (
                        <button key={i} onClick={(e) => { e.stopPropagation(); if(face.pageIndex) onChoice(face.pageIndex, choice); }}
                          className={`comic-btn w-full py-3 text-xl font-bold tracking-wider relative shadow-lg ${i===0?'bg-yellow-400 hover:bg-yellow-300 text-black':'bg-blue-600 text-white hover:bg-blue-500'}`}>
                            {choice}
                        </button>
                    ))}
                </div>
            )}

            {/* Cover Action */}
            {face.type === 'cover' && (
                 <div className="absolute bottom-20 inset-x-0 flex justify-center z-50">
                     <button onClick={(e) => { e.stopPropagation(); onOpenBook(); }}
                      disabled={!allFaces.find(f => f.pageIndex === GATE_PAGE)?.imageUrl}
                      className="comic-btn bg-yellow-400 px-10 py-4 text-3xl font-bold hover:scale-105 animate-bounce disabled:animate-none disabled:bg-gray-400 disabled:cursor-wait shadow-[6px_6px_0px_rgba(0,0,0,1)] border-4 border-black">
                         {(!allFaces.find(f => f.pageIndex === GATE_PAGE)?.imageUrl) ? `INKING... ${allFaces.filter(f => f.type==='story' && f.imageUrl && (f.pageIndex||0) <= GATE_PAGE).length}/${INITIAL_PAGES}` : 'READ ISSUE #1'}
                     </button>
                 </div>
            )}

            {/* Back Cover Actions */}
            {face.type === 'back_cover' && (
                <div className="absolute bottom-24 inset-x-0 flex flex-col items-center gap-4 z-50">
                    <button onClick={(e) => { e.stopPropagation(); onDownload(); }} className="comic-btn bg-blue-500 text-white px-8 py-3 text-xl font-bold hover:scale-105 shadow-[6px_6px_0px_rgba(0,0,0,1)]">DOWNLOAD ISSUE</button>
                    <button onClick={(e) => { e.stopPropagation(); onReset(); }} className="comic-btn bg-green-500 text-white px-8 py-4 text-2xl font-bold hover:scale-105 shadow-[6px_6px_0px_rgba(0,0,0,1)]">CREATE NEW ISSUE</button>
                </div>
            )}
        </div>
    );
}
