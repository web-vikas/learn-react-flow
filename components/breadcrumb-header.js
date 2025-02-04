"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbHeader = () => {
  const pathName = usePathname();
  const paths = pathName === "/" ? [""] : pathName?.split("/");
  return (
    <div className="flex items-center justify-start">
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => (
            <React.Fragment key={index}>
              {index == paths.length - 1 ?
                <BreadcrumbItem>
                  <BreadcrumbPage className="capitalize">
                    {path === "" ? "home" : path}
                  </BreadcrumbPage>
                </BreadcrumbItem> :
                <React.Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="capitalize" href={`/${path}`}>
                      {path === "" ? "home" : path}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </React.Fragment>
              }
            </React.Fragment>
          ))}

        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbHeader;
