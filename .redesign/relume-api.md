## components/ui/button.tsx

```tsx
import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-background-tertiary bg-background-tertiary text-scheme-btn-text",
        alternate: "border border-white bg-white text-neutral-darkest",
        secondary: "border border-scheme-border text-scheme-text",
        "secondary-alt": "border border-white text-white",
        link: "gap-2 text-scheme-text",
        "link-alt": "gap-2 text-white",
        ghost: "hover:bg-neutral-darkest hover:text-white",
        none: "",
      },
      size: { default: "px-6 py-3", sm: "px-5 py-2", link: "p-0", icon: "size-10", none: "" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    title?: string;
    href?: string;
    url?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

export function Button({ className, variant, size, asChild = false, title, href, url, type, onClick, iconLeft, iconRight, children, ...props }: ButtonProps) {
```

## components/relume/Navbar15.tsx

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { KeyboardArrowDown, KeyboardArrowUp } from "relume-icons";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  button: ButtonProps;
};

export type Navbar15Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar15 = (props: Navbar15Props) => {
```

## components/relume/Header145.tsx

```tsx
import { Button, type ButtonProps } from "@/components/ui/button";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header145Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header145 = (props: Header145Props) => {
```

## components/relume/GridList5.tsx

```tsx
import { Button, type ButtonProps } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bathtub, Bed, Bookmark, LocationOn, Search } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type PropertyCard = {
  image: ImageProps;
  title: string;
  description: string;
  location: string;
  numberOfBeds: string;
  numberOfBaths: string;
  price: string;
  priceDuration: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  inputIcon: React.ReactNode;
  selectPlaceholder: string;
  selectItems: string[];
  properties: PropertyCard[];
};

export type GridList5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const GridList5 = (props: GridList5Props) => {
```

## components/relume/Portfolio23.tsx

```tsx
import { useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "relume-icons";

type MotionStyleWithValues = {
  scale: any;
  opacity: any;
};

type ImageProps = {
  src: string;
  alt?: string;
};

type Project = {
  heading: string;
  tags: string[];
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

type Props = {
  tagline: string;
  title: string;
  description: string;
  projects: Project[];
};

export type Portfolio23Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Portfolio23 = (props: Portfolio23Props) => {
```

## components/relume/Stat2.tsx

```tsx
import { ArrowDownward, ArrowUpward, MoreHoriz, RelumeIcon } from "relume-icons";

import { Button, type ButtonProps } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type StatCard = {
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
  comparisonText: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  stats: StatCard[];
  options: string[];
};

export type Stat2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Stat2 = (props: Stat2Props) => {
```

## components/relume/Logo2.tsx

```tsx
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  logos: ImageProps[];
};

export type Logo2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Logo2 = (props: Logo2Props) => {
```

## components/relume/Testimonial43.tsx

```tsx
"use client";

import { useState, useEffect } from "react";
import React from "react";
import clsx from "clsx";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronRight } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  logo: ImageProps;
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial43Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial43 = (props: Testimonial43Props) => {
```

## components/relume/Footer7.tsx

```tsx
type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  links: Links[];
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  logo: ImageProps;
  columnLinks: ColumnLinks[];
  footerText: string;
  footerLinks: FooterLink[];
};

export type Footer7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer7 = (props: Footer7Props) => {
```
