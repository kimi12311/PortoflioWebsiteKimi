"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { Canvas, useFrame } from "@react-three/fiber";
import { GradientTexture, MeshDistortMaterial, Sphere, TrackballControls, useCursor } from "@react-three/drei";
import * as THREE from "three";
import { Orbitron } from "next/font/google";

const SphereNew = () => {
    const ref = useRef<any>(null);
    const [hovered, hover] = useState(false);
    const [scaled, scale] = useState(false);
    const [clicked, click] = useState(false);
    useEffect(() => {

    }, [scaled])
    useCursor(hovered as unknown as boolean);
    useFrame(() => {
        ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, hovered ? 0.4 : 0.1, hovered ? 0.05 : 0.01);
    })

    return (
        <mesh onPointerOver={() => hover(true)} onPointerDown={() => {scale(true); click(prev => !prev)}} onPointerUp={() => scale(false)} onPointerOut={()=>hover(false)} scale={[4,4,4]}>
            <Sphere scale={scaled ? 0.59 : 0.6}>
                <MeshDistortMaterial ref={ref} speed={2} color={clicked ? "darkorange" : "white"}>
                </MeshDistortMaterial>
            </Sphere>
        </mesh>
    )
}

const HeroSection = () => {
  return (
    <section id="home" className="">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16">
        <div className="w-64 h-64">
          <Canvas>
            <TrackballControls/>
            <ambientLight intensity={1} />
            <spotLight intensity={0.4} color="blue" position={[0, 1, 0]} />
            <SphereNew/>
          </Canvas>
        </div>
        <div>
          <h1 className="font-bold text-4xl mt-6 mb-16">Hi, I&#39;m Kimi</h1>
          <p className="text-lg mt-4 mb-20">
            I&#39;m a{" "}
            <span className="text-blue-400 font-semibold">
              Fullstack Developer{" "}
            </span>
            based in Uppsala, Sweden. {" "}
            I&#39;m working towards building the systems of the future and designs that captivate. Previously a musician, I found a new 
            passion in programming. Below, you&#39;ll find some of my projects and skills I&#39;ve developed throughout my journey in tech. 🚀
          </p>
          <Link
            to="projects"
            className="text-white font-semibold px-6 py-3 bg-sky-700 rounded-md hover:bg-orange-400 cursor-pointer transition-all ease-in-out duration-200"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
