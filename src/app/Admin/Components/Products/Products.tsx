"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "@/src/app/Admin/Products/actions";
import React, { useState } from "react";

interface Feature {
  id: number;
  name: string;
  image: string;
}

interface Product {
  id: number;
  imageSrc: string;
  name: string;
  featured: boolean;
  category_id: number;
  description: string;
  brandId: number | null;
  colors: string[];
  features: Feature[];
  category: {
    id: number;
    name: string;
  };
  brand: {
    id: number;
    name: string;
  } | null;
}

interface Brand {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
}

export default function Products({
  products,
  brands,
  categories,
}: {
  products: Product[];
  brands: Brand[];
  categories: Category[];
}) {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [colors, setColors] = useState<string[]>([]);
  const [newColor, setNewColor] = useState("");
  const [features, setFeatures] = useState<{ name: string; image: string }[]>(
    []
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;

  const handleAddColor = () => {
    if (newColor.trim()) {
      setColors([...colors, newColor.trim()]);
      setNewColor("");
    }
  };

  const handleRemoveColor = (indexToRemove: number) => {
    setColors(colors.filter((_, index) => index !== indexToRemove));
  };

  const handleAddFeature = () => {
    setFeatures([...features, { name: "", image: "" }]);
  };

  const handleRemoveFeature = (indexToRemove: number) => {
    setFeatures(features.filter((_, index) => index !== indexToRemove));
  };

  const handleFeatureChange = (
    index: number,
    field: "name" | "image",
    value: string
  ) => {
    const newFeatures = [...features];
    newFeatures[index][field] = value;
    setFeatures(newFeatures);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id);
      setIsDeleteOpen(false);
      setProductToDelete(null);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    form.delete("colors"); // Remove any existing colors field
    colors.forEach((color) => {
      form.append("colors[]", color);
    });
    features.forEach((feature) => {
      form.append(`feature_names[]`, feature.name);
      form.append(`feature_images[]`, feature.image);
    });
    try {
      await createProduct(form);
      setIsAddOpen(false);
      setColors([]); // Reset colors after submission
      setFeatures([]); // Reset features after submission
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleUpdateProduct = async (
    e: React.FormEvent<HTMLFormElement>,
    productId: number
  ) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    form.delete("colors"); // Remove any existing colors field
    colors.forEach((color) => {
      form.append("colors[]", color);
    });
    features.forEach((feature) => {
      form.append(`feature_names[]`, feature.name);
      form.append(`feature_images[]`, feature.image);
    });
    try {
      await updateProduct(productId, form);
      setIsEditOpen(false);
      setSelectedProduct(null);
      setColors([]); // Reset colors after submission
      setFeatures([]); // Reset features after submission
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Calculate pagination
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col h-screen space-y-2 p-4">
      <div className="flex justify-between h-[60px] max-h-[60px] items-center">
        <h1 className="text-2xl font-bold mb-6">Products</h1>
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button>Add Product</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>
                Fill in the product details below
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddProduct} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    required
                    id="name"
                    name="name"
                    placeholder="Product name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="imageSrc">Image URL</Label>
                  <Input
                    required
                    id="imageSrc"
                    name="imageSrc"
                    placeholder="Image URL"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category_id">Category</Label>
                  <Select name="category_id" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem
                          key={category.id}
                          value={category.id.toString()}
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="brandId">Brand</Label>
                  <Select name="brandId">
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand.id} value={brand.id.toString()}>
                          {brand.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  required
                  id="description"
                  name="description"
                  placeholder="Product description"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label>Colors</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={newColor}
                    onChange={(e) => setNewColor(e.target.value)}
                    placeholder="Add a color"
                  />
                  <Button type="button" onClick={handleAddColor}>
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded"
                    >
                      {color}
                      <button
                        type="button"
                        onClick={() => handleRemoveColor(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>Features</Label>
                  <Button type="button" onClick={handleAddFeature} size="sm">
                    Add Feature
                  </Button>
                </div>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[1fr,1fr,auto] gap-4 items-start"
                    >
                      <Input
                        value={feature.name}
                        onChange={(e) =>
                          handleFeatureChange(index, "name", e.target.value)
                        }
                        placeholder="Feature name"
                      />
                      <Input
                        value={feature.image}
                        onChange={(e) =>
                          handleFeatureChange(index, "image", e.target.value)
                        }
                        placeholder="Feature image URL"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRemoveFeature(index)}
                      >
                        Delete
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="featured" name="featured" value="true" />
                <Label htmlFor="featured">Featured Product</Label>
              </div>
              <DialogFooter>
                <Button type="submit">Save Product</Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsAddOpen(false);
                    setColors([]);
                    setFeatures([]);
                  }}
                >
                  Cancel
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex-1 rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Colors</TableHead>
              <TableHead>Features</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentProducts.map((product) => (
              <TableRow key={product.id} className="h-16">
                <TableCell>
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg border"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category.name}</TableCell>
                <TableCell>{product.brand?.name || "N/A"}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {product.features?.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs"
                      >
                        {feature.name}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      product.featured
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {product.featured ? "Yes" : "No"}
                  </span>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Dialog
                    open={isEditOpen && selectedProduct?.id === product.id}
                    onOpenChange={(open) => {
                      setIsEditOpen(open);
                      if (!open) {
                        setSelectedProduct(null);
                        setColors([]);
                        setFeatures([]);
                      } else {
                        setSelectedProduct(product);
                        setColors(product.colors);
                        setFeatures(
                          product.features?.map((f) => ({
                            name: f.name,
                            image: f.image,
                          })) || []
                        );
                      }
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Edit Product</DialogTitle>
                        <DialogDescription>
                          Modify the product details below
                        </DialogDescription>
                      </DialogHeader>
                      <form
                        onSubmit={(e) => handleUpdateProduct(e, product.id)}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="edit-name">Name</Label>
                            <Input
                              required
                              id="edit-name"
                              name="name"
                              defaultValue={product.name}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edit-imageSrc">Image URL</Label>
                            <Input
                              required
                              id="edit-imageSrc"
                              name="imageSrc"
                              defaultValue={product.imageSrc}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edit-category">Category</Label>
                            <Select
                              name="category_id"
                              defaultValue={product.category_id.toString()}
                              required
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {categories.map((category) => (
                                  <SelectItem
                                    key={category.id}
                                    value={category.id.toString()}
                                  >
                                    {category.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edit-brand">Brand</Label>
                            <Select
                              name="brandId"
                              defaultValue={product.brandId?.toString()}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {brands.map((brand) => (
                                  <SelectItem
                                    key={brand.id}
                                    value={brand.id.toString()}
                                  >
                                    {brand.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="edit-description">Description</Label>
                          <Textarea
                            required
                            id="edit-description"
                            name="description"
                            defaultValue={product.description}
                            className="min-h-[100px]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Colors</Label>
                          <div className="flex gap-2 mb-2">
                            <Input
                              value={newColor}
                              onChange={(e) => setNewColor(e.target.value)}
                              placeholder="Add a color"
                            />
                            <Button type="button" onClick={handleAddColor}>
                              Add
                            </Button>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {colors.map((color, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded"
                              >
                                {color}
                                <button
                                  type="button"
                                  onClick={() => handleRemoveColor(index)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label>Features</Label>
                            <Button
                              type="button"
                              onClick={handleAddFeature}
                              size="sm"
                            >
                              Add Feature
                            </Button>
                          </div>
                          <div className="space-y-4">
                            {features.map((feature, index) => (
                              <div
                                key={index}
                                className="grid grid-cols-[1fr,1fr,auto] gap-4 items-start"
                              >
                                <Input
                                  value={feature.name}
                                  onChange={(e) =>
                                    handleFeatureChange(
                                      index,
                                      "name",
                                      e.target.value
                                    )
                                  }
                                  placeholder="Feature name"
                                />
                                <Input
                                  value={feature.image}
                                  onChange={(e) =>
                                    handleFeatureChange(
                                      index,
                                      "image",
                                      e.target.value
                                    )
                                  }
                                  placeholder="Feature image URL"
                                />
                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => handleRemoveFeature(index)}
                                >
                                  Delete
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="edit-featured"
                            name="featured"
                            value="true"
                            defaultChecked={product.featured}
                          />
                          <Label htmlFor="edit-featured">
                            Featured Product
                          </Label>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save Changes</Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setIsEditOpen(false);
                              setColors([]);
                              setFeatures([]);
                            }}
                          >
                            Cancel
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <Dialog
                    open={isDeleteOpen && productToDelete === product.id}
                    onOpenChange={(open) => {
                      setIsDeleteOpen(open);
                      if (!open) setProductToDelete(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => setProductToDelete(product.id)}
                      >
                        Delete
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete Product</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to delete this product? This
                          action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => setIsDeleteOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => setCurrentPage(page)}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
